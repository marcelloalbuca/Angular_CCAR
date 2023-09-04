import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { Marca } from "../classes/marca";
import { map } from "rxjs/operators";

@Injectable()
export class WS_Marcas {
    private strURL: string = "http://localhost/ws_locadora/lista_dados.php?tabela=marca";

    constructor (private http: HttpClient) {}

    public lerMarcas(): Observable<Marca[]> {
        return this.http.get<Marca[]>(this.strURL)
                            .pipe(
                                map(resposta => resposta),
                                );
    }

}





