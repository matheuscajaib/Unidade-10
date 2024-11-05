// guarda.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap, map } from 'rxjs/operators';

export const guarda: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isAuthenticated$.pipe(
    tap(isAuthenticated => {
      if (!isAuthenticated) {
        auth.loginWithRedirect(); // Redireciona para a página de login do Auth0 automaticamente
      }
    }),
    map(isAuthenticated => isAuthenticated)
  );
};
