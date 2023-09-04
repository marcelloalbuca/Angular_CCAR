import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat";
import "rxjs/Rx"
import { Modelo } from "../classes/modelo";
import { map } from "rxjs/operators";

@Injectable()
export class WS_Modelos {
    
    private srtURL: string = "http://localhost/ws_locadora/lista.dados.php?tabela=modelo";

    constructor(private http: HttpClient) { }

    public lerModelos(): Observable<Modelo[]> {
        return this.http.get<Modelo[]>(this.srtURL)
                        .pipe(
                            map(resposta => resposta),
                            );
    }



}













