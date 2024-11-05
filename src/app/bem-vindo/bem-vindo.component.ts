import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  standalone: true,
  imports: [],
  templateUrl: './bem-vindo.component.html',
  styleUrl: './bem-vindo.component.css'
})
export class BemVindoComponent {

  constructor(private router: Router) {}

  lista(){

    this.router.navigate(['/lista']);

  }

}
