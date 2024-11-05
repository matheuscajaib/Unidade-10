// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AuthService as Auth0Service, User } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserId: string | null = null;

  constructor(private auth0: Auth0Service) {
    // Obter e armazenar o `userId` do usuário quando ele logar
    this.auth0.user$.pipe(
      tap((user) => {
        this.currentUserId = user?.sub ?? null; 
      })
    ).subscribe();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  get userId(): string | null {
    return this.currentUserId;
  }

  loginWithRedirect(): void {
    this.auth0.loginWithRedirect();
  }

  logout(): void {
    this.auth0.logout({ logoutParams: { returnTo: window.location.origin } });
    this.currentUserId = null;
  }
}
