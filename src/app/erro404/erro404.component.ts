import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erro404',
  standalone: true,
  imports: [],
  templateUrl: './erro404.component.html',
  styleUrl: './erro404.component.css'
})
export class Erro404Component {

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/bem-vindo']);
  }

}
