// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly apiUrl = 'http://localhost:3000/lista';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Carregar tarefas do usuário autenticado
  getUserTasks(): Observable<any[]> {
    const userId = this.authService.currentUserId;
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }

  // Adicionar tarefa com base no usuário autenticado
  addTask(task: Partial<any>): Observable<any> {
    const userId = this.authService.currentUserId;
    return this.http.post<any>(this.apiUrl, { ...task, userId });
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }

  updateTask(taskId: number, updatedTask: Partial<any>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${taskId}`, updatedTask);
  }
}
