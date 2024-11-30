import { Routes } from '@angular/router';

import { Erro404Component } from './erro404/erro404.component';
import { guarda } from './guarda.guard'; 
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { Tf2DancaComponent } from './tf2-danca/tf2-danca.component';
import { tf2overwatch } from './tf2overwatch/tf2overwatch.component';
import { RickastleyComponent } from './rickastley/rickastley.component';

export const routes: Routes = [
    { path: '', redirectTo: 'bem-vindo', pathMatch: 'full' },
    { path: '404', component: Erro404Component },
    { path: 'home', component: HomeComponent},
    { path: 'tf2danca', component: Tf2DancaComponent },
    { path: 'tf2overwatch', component: tf2overwatch},
    { path: 'rickastley', component: RickastleyComponent },
    { path: '**', redirectTo: 'home' }
];
