import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly apiUrl = 'http://localhost:3000/lista';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Carregar listas associadas ao usuário logado
  getUserTasks(): Observable<any[]> {
    const userId = this.authService.userId;
    return this.http.get<any[]>(`${this.apiUrl}?userId=${userId}`);
  }

  // Adicionar uma nova tarefa associada ao `userId` do usuário logado
  addTask(task: Partial<any>): Observable<any> {
    const userId = this.authService.userId;
    return this.http.post<any>(this.apiUrl, { ...task, userId });
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }

  updateTask(taskId: number, updatedTask: Partial<any>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${taskId}`, updatedTask);
  }
}
