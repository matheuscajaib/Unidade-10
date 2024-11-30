import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rickastley',
  standalone: true,
  imports: [],
  templateUrl: './rickastley.component.html',
  styleUrl: './rickastley.component.css'
})
export class RickastleyComponent {

  constructor(private router: Router) {}

  home() {
    this.router.navigate(['/home']);
  }

}