import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tf2overwatch',
  standalone: true,
  imports: [],
  templateUrl: './tf2overwatch.component.html',
  styleUrl: './tf2overwatch.component.css'
})
export class tf2overwatch {

  constructor(private router: Router) {}

  home() {
    this.router.navigate(['/home']);
  }

}