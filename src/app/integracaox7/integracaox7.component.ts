import { Component, OnInit } from '@angular/core';
import { PoPageModule, PoSearchModule, PoTableModule, PoSelectOption, PoModalModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { IntegracaoX7Service } from './integracaox7.service'; // Ajuste o caminho

@Component({
  selector: 'app-integracaox7',
  standalone: true,
  imports: [PoPageModule, PoSearchModule, PoTableModule, PoPageDynamicSearchModule, PoModalModule],
  templateUrl: './integracaox7.component.html',
  styleUrls: ['./integracaox7.component.css']
})
export class Integracaox7Component implements OnInit {
  quickSearchWidth = 6;
  filteredAbastecimentos: Array<any> = [];
  hideRemoveAllDisclaimer = false
  hideCloseDisclaimers: Array<string> = ['city'];
  showModal: boolean = false;
  selectedItem: any;
  
  // Mantido no componente pois é configuração de UI
  filters = [
    { property: 'fornecedor', label: 'Fornecedor', type: 'string' },
    { property: 'filial', label: 'Filial', type: 'number' },
    { property: 'dateini', label: 'Data Inicial', type: 'date' },
    { property: 'datefin', label: 'Data Final', type: 'date' },
    {
      property: 'status',
      label: 'Status',
      type: 'subtitle',
      subtitles: [
        { value: '1', color: 'success', label: 'Sucesso', content: '1' },
        { value: '2', color: 'warning', label: 'Em Processamento', content: '2' },
        { value: '3', color: 'danger', label: 'Cancelado', content: '3' }
      ]
    },
  ];

  // Mantido no componente pois é configuração da tabela
  columns = [
    {
      property: 'status',
      label: 'Status',
      type: 'subtitle',
      width: '100px',
      alignHeader: 'right',
      subtitles: [
        { value: 'Sucesso', color: 'success', label: 'Sucesso', content: '1' },
        { value: 'Em Processamento', color: 'warning', label: 'Em Processamento', content: '2' },
        { value: 'Cancelado', color: 'danger', label: 'Cancelado', content: '3' }
      ]
    },
    { property: 'filial', label: 'Filial', type: 'number', alignHeader: 'left', align: 'left', width: '100px' },
    { property: 'fornecedor', label: 'Fornecedor', type: 'string', width: '400px' },
    { property: 'dateini', label: 'Data Inicial', type: 'date' },
    { property: 'datefin', label: 'Data Final', type: 'date' }
  ];

  constructor(private integracaoService: IntegracaoX7Service) {}
  
  private onClickRemoveAllDisclaimer() {
    this.hideRemoveAllDisclaimer = !this.hideRemoveAllDisclaimer;
  }

  private isVisibleRemoveAllDisclaimer() {
    return !this.hideRemoveAllDisclaimer;
  }

  private isHideRemoveAllDisclaimer() {
    return this.hideRemoveAllDisclaimer;
  }

  statusOptions: Array<PoSelectOption> = [];

  ngOnInit() {
    this.filteredAbastecimentos = this.integracaoService.getDados();
  }

  onRowClick(row: any) {
    this.selectedItem = row;
    this.showModal = true; // Isso agora acionará o *ngIf do modal
  }

  closeModal() {
    this.showModal = false;
  }

  limparFiltros() {
    this.filteredAbastecimentos = this.integracaoService.resetarFiltros();
    this.statusOptions = this.integracaoService.getStatus();
  }
  
  getDados(filters: any) {
    this.filteredAbastecimentos = this.integracaoService.filtrarDados(filters);
  }
  
  onAdvancedSearch(filters: any) {
    filters ? this.getDados(filters) : this.limparFiltros();
  }
  
  onSearch(filters: any) {
    this.filteredAbastecimentos = this.integracaoService.filtrarDados(filters);
    console.log('Resultados filtrados:', this.filteredAbastecimentos);
  }

  private onClickCloseCityDisclaimer() {
    if (this.hideCloseDisclaimers.length > 0) {
      this.hideCloseDisclaimers = [];
    } else {
      this.hideCloseDisclaimers = ['city'];
    }
  }

  private isVisibleCloseCityDisclaimer() {
    return this.hideCloseDisclaimers.length <= 0;
  }
}