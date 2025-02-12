import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
    })
    export class IntegracaoX7Service {
    private abastecimentos: Array<any> = [
        { fornecedor: 'Empresa Alpha', filial: 1, dateini: new Date('2023-01-01'), datefin: new Date('2023-01-02'), status: 'Sucesso' },
        { fornecedor: 'Beta Corp', filial: 2, dateini: new Date('2023-02-01'), datefin: new Date('2023-02-02'), status: 'Em Processamento' },
        { fornecedor: 'Gamma Ltda', filial: 3, dateini: new Date('2023-03-01'), datefin: new Date('2023-03-02'), status: 'Cancelado' },
        { fornecedor: 'Delta S.A.', filial: 4, dateini: new Date('2023-04-01'), datefin: new Date('2023-04-02'), status: 'Sucesso' },
        { fornecedor: 'Epsilon Inc', filial: 5, dateini: new Date('2023-05-01'), datefin: new Date('2023-05-02'), status: 'Em Processamento' },
        { fornecedor: 'Zeta Comércio', filial: 6, dateini: new Date('2023-06-01'), datefin: new Date('2023-06-02'), status: 'Cancelado' },
        { fornecedor: 'Eta Distribuidora', filial: 7, dateini: new Date('2023-07-01'), datefin: new Date('2023-07-02'), status: 'Sucesso' },
        { fornecedor: 'Theta Serviços', filial: 8, dateini: new Date('2023-08-01'), datefin: new Date('2023-08-02'), status: 'Em Processamento' },
        { fornecedor: 'Iota Indústria', filial: 9, dateini: new Date('2023-09-01'), datefin: new Date('2023-09-02'), status: 'Cancelado' },
        { fornecedor: 'Kappa Logística', filial: 10, dateini: new Date('2023-10-01'), datefin: new Date('2023-10-02'), status: 'Sucesso' }
    ];

    getDados(): Array<any> {
        return this.abastecimentos;
    }

    resetarFiltros(){
        return[...this.getDados()];
    }

    filtrarDados(filters: any): Array<any> {
        if (typeof filters === 'string') {
        return this.filtroRapido(filters);
        }
        return this.filtroAvancado(filters);
    }

    getStatus(){
        return [
            { value: 'Sucesso', color: 'success', label: 'Sucesso', content: 'Sucesso' },
            { value: 'Em Processamento', color: 'warning', label: 'Em Processamento', content: 'Em Processamento' },
            { value: 'Cancelado', color: 'danger', label: 'Cancelado', content: 'Cancelado' }
        ];
    }

    private filtroRapido(termo: string): Array<any> {
        if (!termo) return this.abastecimentos;
        
        return this.abastecimentos.filter(item =>
        item.fornecedor.toLowerCase().includes(termo.toLowerCase())
        );
    }

    private filtroAvancado(filtros: any): Array<any> {
        return this.abastecimentos.filter(item => {
        return Object.keys(filtros).every(key => {
            if (!filtros[key] && filtros[key] !== 0) return true;
            
            const valorFiltro = this.normalizarValor(filtros[key]);
            const valorItem = this.normalizarValor(item[key]);
            
            if (valorItem === undefined) return false;
            if (key.includes('date')) return this.compararDatas(valorFiltro, valorItem);
            
            return valorItem.toString().toLowerCase().includes(valorFiltro.toString().toLowerCase());
        });
        });
    }

    private normalizarValor(value: any): any {
        if (value instanceof Date) return value;
        if (typeof value === 'string' && !isNaN(Date.parse(value))) return new Date(value);
        return value;
    }

    private compararDatas(dataFiltro: Date, dataItem: Date): boolean {
        try {
        return dataFiltro.toISOString().split('T')[0] === dataItem.toISOString().split('T')[0];
        } catch (error) {
        return false;
        }
    }
}