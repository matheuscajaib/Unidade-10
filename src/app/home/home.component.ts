import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: []
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  videos: any[] = [];

  ngOnInit(): void {
    this.fetchVideos();
  }

  async fetchVideos() {
    const response = await fetch('assets/db.json');
    const data = await response.json();
    this.videos = data.videos;
  }

  redirectToVideo(videoId: number) {
    window.location.href = `/video-player?id=${videoId}`;
  }

  tf2danca() {
    this.router.navigate(['/tf2danca']);
  }

  TF2eOverwatch() {
    this.router.navigate(['/tf2overwatch']);
  }

  rickastley() {
    this.router.navigate(['/rickastley']);
  }
}