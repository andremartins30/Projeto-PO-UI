import { Routes } from '@angular/router';
import { DocumentoFiscalEntradaComponent } from './documento-fiscal-entrada/documento-fiscal-entrada.component';
import { HomeComponent } from './home/home.component'; // Crie um componente para a home
import { Integracaox7Component } from './integracaox7/integracaox7.component';
import { GeralComponent } from './geral/geral.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { PedidoDeCompraComponent } from './pedido-de-compra/pedido-de-compra.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'documento-fiscal-entrada', component: DocumentoFiscalEntradaComponent }, 
    { path: 'integracaox7', component: Integracaox7Component},
    { path: 'geral', component: GeralComponent},
    { path: 'dashboards', component: DashboardsComponent},
    { path: 'pedido-de-compra', component: PedidoDeCompraComponent }
];