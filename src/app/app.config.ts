import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
              provideRouter(routes),
              provideHttpClient(),
              provideAuth0({
                domain: 'dev-u0uu2776k065znps.us.auth0.com',
                clientId: 'EdDttID1sKV3kN0eNbTscc1UFi4FzSBa',
                authorizationParams: {
                  audience: 'https://dev-u0uu2776k065znps.us.auth0.com/api/v2/',
                  scope: 'openid profile email offline_access',
                  redirect_uri: window.location.origin
                },

                useRefreshTokens: true,

                cacheLocation: 'localstorage',

              }),
               
                ],
};
