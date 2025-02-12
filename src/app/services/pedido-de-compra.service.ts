import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PedidoDeCompraService {

    private pedidos: Array<any> = [
        {
            idAbastecimento: "315564",
            veiculo: "AVEBC32",
            dataAbastec: "19/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,910",
            quantidade: "57,000",
            valorTotal: "336,870"
        },
        {
            idAbastecimento: "315562",
            veiculo: "MAQ0079",
            dataAbastec: "19/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,83",
            quantidade: "200,000",
            valorTotal: "1,166.000"
        },
        {
            idAbastecimento: "315522",
            veiculo: "SCH4E36",
            dataAbastec: "19/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "4,240",
            quantidade: "34,600",
            valorTotal: "146,704"
        },
        {
            idAbastecimento: "315563",
            veiculo: "MAQ0075",
            dataAbastec: "19/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,830",
            quantidade: "200,000",
            valorTotal: "1.166,000"
        },
        {
            idAbastecimento: "315674",
            veiculo: "TRT0001",
            dataAbastec: "19/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,830",
            quantidade: "100,000",
            valorTotal: "583,000"
        },
        {
            idAbastecimento: "315686",
            veiculo: "MAQ0075",
            dataAbastec: "20/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,830",
            quantidade: "200,000",
            valorTotal: "1.166,000"
        },
        {
            idAbastecimento: "316974",
            veiculo: "MAQ0077",
            dataAbastec: "25/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,830",
            quantidade: "400,000",
            valorTotal: "2.332,000"
        },
        {
            idAbastecimento: "317782",
            veiculo: "SCH4E36",
            dataAbastec: "28/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "4,240",
            quantidade: "34,491",
            valorTotal: "146,242"
        },
        {
            idAbastecimento: "317023",
            veiculo: "TSA1003",
            dataAbastec: "25/01/2025",
            nomeFantasia: "POSTO 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,830",
            quantidade: "200,000",
            valorTotal: "1.166,000"
        },
        {
            idAbastecimento: "315410",
            veiculo: "M400075",
            dataAbastec: "18/01/2025",
            nomeFantasia: "POSTO: 44",
            cpfCnpj: "1892399000125",
            mediaValor: "5,830",
            quantidade: "400,000",
            valorTotal: "2.532000"
        }
    ]
    ;

    constructor(private http: HttpClient){}

    getPedidos(): Observable<any[]>{
        return of (this.pedidos)
    }
}