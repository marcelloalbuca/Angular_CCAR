import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs-compat";
import 'rxjs/Rx';
import 'rxjs/add/operators/map';
import 'rxjs/add/operators/catch';
import { Veiculo } from "../classes/veiculo";

@Injectable()
export class WS_Veiculos {

    constructor(private http: HttpClient) {}

    private urlLer: string = "http://localhost/ws_locadora/lista_dados.php?tabela=veiculo";
    private urlGravar: string = "http://localhost/ws_locadora/adiciona_veiculo.php";
     
    public lerVeiculo(): Observable<Veiculo[]> {
        return this.http.get<Veiculo[]>(this.urlLer)
                        .map(resposta => resposta);
    }

    public gravarVeiculo(carro: any): Observable<Veiculo[]> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.urlGravar, carro, { headers: headers })
        .map(this.extrairDados)
        .catch(this.trataErro);
    }

    extrairDados(resposta: Response | any) {
        return resposta || {};
    }

    trataErro(erro: Response | any){
        return Observable.throwError(erro.mensage || erro);
    }

}











