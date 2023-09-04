import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat";
import "rxjs/Rx"
import { Cor } from "../classes/cor";
import { map } from "rxjs/operators";

@Injectable()
export class WS_Cores {

    private strURL: string = "http://localhost/ws_locadora/lista_dados.php?tabela=cor_veiculo";

    constructor(private http: HttpClient) {}

    public lerCores(): Observable<Cor[]> {
        return this.http.get<Cor[]>(this.strURL)
                            .map(resposta => resposta);
    }



}
