import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tf2-danca',
  standalone: true,
  imports: [],
  templateUrl: './tf2-danca.component.html',
  styleUrl: './tf2-danca.component.css'
})
export class Tf2DancaComponent {

  constructor(private router: Router) {}

  home() {
    this.router.navigate(['/home']);
  }

}
