import { Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { ListaComponent } from './lista/lista.component';
import { Erro404Component } from './erro404/erro404.component';
import { guarda } from './guarda.guard'; 

export const routes: Routes = [
    { path: '', redirectTo: 'bem-vindo', pathMatch: 'full' },
    { path: 'bem-vindo', component: BemVindoComponent },
    { path: 'lista', component: ListaComponent, canActivate: [guarda] },
    { path: '404', component: Erro404Component },
    { path: '**', redirectTo: '404' }
];
