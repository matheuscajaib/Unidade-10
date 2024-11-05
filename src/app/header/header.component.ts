import { Component, Inject, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { DOCUMENT, CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profile: User | null | undefined;
  isAuthenticated$: Observable<boolean> = of(false); // Inicializa com um Observable falso

  constructor(public readonly auth: AuthService, @Inject(DOCUMENT) private document: Document) {}

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: this.document.location.origin },
    });
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.auth.isAuthenticated$; // Substitui com o valor real no ngOnInit

    // Atualiza o perfil do usuário caso ele esteja logado
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });
  }
}
