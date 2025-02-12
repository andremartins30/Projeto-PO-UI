import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importe o provideHttpClient
import { provideAnimations } from '@angular/platform-browser/animations'; // Substitua BrowserAnimationsModule por provideAnimations
import { AppComponent } from './app/app.component';
import { DocumentoFiscalEntradaComponent } from './app/documento-fiscal-entrada/documento-fiscal-entrada.component';
import { HomeComponent } from './app/home/home.component';
import { Integracaox7Component } from './app/integracaox7/integracaox7.component';
import { ProAuthInteceptor } from '@totvs/protheus-lib-core';
import { GeralComponent } from './app/geral/geral.component';
import { DashboardsComponent } from './app/dashboards/dashboards.component';
import { PedidoDeCompraComponent } from './app/pedido-de-compra/pedido-de-compra.component';
import { appConfig } from './app/app.config';

// Defina as rotas
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'documento-fiscal-entrada', component: DocumentoFiscalEntradaComponent },
  { path: 'integracaox7', component: Integracaox7Component },
  { path: 'geral', component: GeralComponent},
  { path: 'dashboards', component: DashboardsComponent },
  { path: 'pedido-de-compra', component: PedidoDeCompraComponent }
];

// Configure a aplicação com as rotas e o HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Fornece as rotas para a aplicação
    provideHttpClient(withInterceptorsFromDi()), // Fornece o HttpClient com suporte a interceptadores
    { provide: HTTP_INTERCEPTORS, useClass: ProAuthInteceptor, multi: true }, // Configura o interceptor
    provideAnimations() // Fornece suporte a animações (substitui BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));