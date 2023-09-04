import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs-compat";
import "rxjs/Rx"
import { Tipo } from "../classes/tipo";
import { map } from "rxjs/operators";


@Injectable()
export class WS_Tipos{

    private strURL: string = "http://localhost/ws_locadora/lista_dados.php?tabela=tipo_veiculo";

    constructor(private http: HttpClient) { }

    public lerTipos(): Observable<Tipo[]>{
        return this.http.get<Tipo[]>(this.strURL)
                            .pipe(
                                map(resposta => resposta),
                            );
    }
    
}
