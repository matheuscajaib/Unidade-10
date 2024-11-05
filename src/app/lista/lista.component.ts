import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { TaskService } from '../services/task.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaArray: any[] = [];
  itemCompletado: any[] = [];

  constructor(private taskService: TaskService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Carregar as tarefas do usuário autenticado
  loadTasks(): void {
    this.taskService.getUserTasks().subscribe(tasks => {
      this.listaArray = tasks.filter(task => !task.included);      // Tarefas pendentes
      this.itemCompletado = tasks.filter(task => task.included);   // Tarefas completadas
    });
  }

  // Adicionar uma nova tarefa e enviar para o backend
  naLista(form: NgForm): void {
    const newTask = {
      title: form.controls['item'].value, // usa o campo 'title'
      included: false
    };

    this.taskService.addTask(newTask).subscribe(task => {
      this.listaArray.push(task); // Adiciona a tarefa na lista local
      form.reset();
    });
  }

  // Deletar uma tarefa da lista e remover do backend
  deletarDaLista(index: number): void {
    const task = this.listaArray[index];
    if (task.id) {
      this.taskService.deleteTask(task.id).subscribe(() => {
        this.listaArray.splice(index, 1);
      });
    }
  }

  // Deletar uma tarefa da lista de completados e remover do backend
  deletarCompletado(index: number): void {
    const task = this.itemCompletado[index];
    if (task.id) {
      this.taskService.deleteTask(task.id).subscribe(() => {
        this.itemCompletado.splice(index, 1);
      });
    }
  }

  // Marcar ou desmarcar uma tarefa como completada e atualizar no backend
  completado(item: any, index: number, isCompletadoList: boolean): void {
    item.included = !isCompletadoList;

    if (item.id) {
      this.taskService.updateTask(item.id, { included: item.included }).subscribe(updatedTask => {
        if (isCompletadoList) {
          // Mover para lista principal se estava completado
          this.listaArray.push(updatedTask);
          this.itemCompletado.splice(index, 1);
        } else {
          // Mover para lista de completados se estava pendente
          this.itemCompletado.push(updatedTask);
          this.listaArray.splice(index, 1);
        }
      });
    }
  }
}
