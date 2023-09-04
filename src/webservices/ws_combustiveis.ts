import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat";
import "rxjs/Rx"
import { Combustivel } from "../classes/combustivel";
import { map } from "rxjs/operators";


@Injectable()
export class WS_Combustiveis {

    private srtURL: string = "http://localhost/ws_locadora/lista_dado.php?tabela=combustivel";
    
    constructor(private http: HttpClient) { }

    public lerCombustiveis(): Observable<Combustivel[]> {

        return this.http.get<Combustivel[]>(this.srtURL)
                            .map(resposta => resposta);
                            
    }

}









