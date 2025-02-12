import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  PoAvatarModule,
  PoMenuItem,
  PoMenuModule,
  PoNavbarModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoAvatarModule,
    RouterModule, // Importe o RouterModule
    RouterOutlet, // Importe o RouterOutlet
    PoNavbarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: 'po-icon-home' }, // Rota para a home
    { label: 'Integração X7', icon: 'an an-cloud-arrow-up', link: '/integracaox7' },
    //{ label: 'Geral', icon: 'po-icon-document', link: '/geral' },
    { label: 'Dashboards', icon: 'an an-graph', link: '/dashboards' },
    { label: 'Pedido de Compra', icon: 'an an-shopping-cart', link: '/pedido-de-compra' },
    /*{
      label: 'Cadastros',
      icon: 'po-icon-document',
      subItems: [
        { label: 'Fornecedores', subItems: [
          { label: 'Pedido de Compra', subItems: [
            { label: 'Documento Fiscal (Entrada)', link: '/documento-fiscal-entrada' }, // Rota para o componente
            { label: 'Título Financeiro', action: this.onClick.bind(this) },
            { label: 'Histórico de Compras', action: this.onClick.bind(this) }
          ]},
        ]},
        { label: 'Clientes', action: this.onClick.bind(this) }
      ]
    },
    { label: 'Relatórios', icon: 'po-icon-chart-area', subItems: [
      { label: 'Vendas', action: this.onClick.bind(this) },
      { label: 'Compras', action: this.onClick.bind(this) }
    ]},
    { label: 'Configurações', icon: 'po-icon-settings', subItems: [
      { label: 'Usuários', action: this.onClick.bind(this) },
      { label: 'Permissões', action: this.onClick.bind(this) }
    ]}*/
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}