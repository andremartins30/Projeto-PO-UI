import { Component, OnInit } from '@angular/core';
import {PoButtonModule, PoFieldModule, PoModalComponent, PoModalModule, PoPageModule, PoSearchModule, PoTableColumn, PoTableModule, PoToolbarModule} from '@po-ui/ng-components';
import { PedidoDeCompraService } from '../services/pedido-de-compra.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-pedido-de-compra',
  imports: [
    CommonModule,
    HttpClientModule,
    PoPageModule,
    PoSearchModule,
    PoToolbarModule,
    PoTableModule,
    PoButtonModule,
    PoModalModule,
    PoFieldModule
  ],
  providers: [],
  templateUrl: './pedido-de-compra.component.html',
  styleUrl: './pedido-de-compra.component.css',
  standalone: true
})
export class PedidoDeCompraComponent {

  pedidos: any[] = []
  columns: PoTableColumn[] = [
    { property: 'idAbastecimento', label: 'Id Abastecimento' },
    { property: 'veiculo', label: 'Veículo' },
    { property: 'dataAbastec', label: 'Data Abastecimento' },
    { property: 'nomeFantasia', label: 'Nome Fantasia' },
    { property: 'cpfCnpj', label: 'CPF/CNPJ' },
    { property: 'mediaValor', label: 'Média Valor' },
    { property: 'quantidade', label: 'Quantidade' },
    { property: 'valorTotal', label: 'Valor Total' },
  ]

  constructor(private pedidoDeCompraService: PedidoDeCompraService) { }

  ngOnInit() {
    this.carregarPedidos();
  }

  carregarPedidos() {
    this.pedidoDeCompraService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
      
  }
  
}
