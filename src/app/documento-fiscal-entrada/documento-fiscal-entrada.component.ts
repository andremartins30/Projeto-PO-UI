import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-documento-fiscal-entrada',
  standalone: true,
  imports: [CommonModule, PoPageModule],
  templateUrl: './documento-fiscal-entrada.component.html'
})
export class DocumentoFiscalEntradaComponent { }