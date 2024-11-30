import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'; // Importação do switchMap

// Definindo a interface Video fora dos métodos para ser reutilizável
export interface Video {
  id: number;
  title: string;
  views: number;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:3000/videos';  // URL do json-server

  constructor(private http: HttpClient) { }

  // Método para incrementar as visualizações de um vídeo
  incrementViews(videoId: number): Observable<Video> {
    // Primeiramente, obtemos o vídeo pelo ID
    return this.http.get<Video>(`${this.apiUrl}/${videoId}`).pipe(
      switchMap(video => {
        // Incrementa o número de visualizações
        video.views += 1;

        // Atualiza o vídeo com a nova contagem de visualizações
        return this.http.put<Video>(`${this.apiUrl}/${videoId}`, video);
      })
    );
  }

  // Método para pegar todos os vídeos (opcional, se você precisar)
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }
}
