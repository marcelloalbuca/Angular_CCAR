import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/classes/marca';
import { Modelo } from 'src/classes/modelo';
import { Tipo } from 'src/classes/tipo';
import { Cor } from 'src/classes/cor';
import { Combustivel } from 'src/classes/combustivel';
import { Veiculo } from 'src/classes/veiculo';
import { WS_Combustiveis } from 'src/webservices/ws_combustiveis';
import { WS_Cores } from 'src/webservices/ws_cores';
import { WS_Marcas } from 'src/webservices/ws_marcas';
import { WS_Modelos } from 'src/webservices/ws_ modelos';
import { WS_Tipos } from 'src/webservices/ws_tipos';
import { WS_Veiculos } from 'src/webservices/ws_veiculos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/styles.css'],
  providers: [WS_Marcas,WS_Modelos,WS_Tipos,WS_Cores,WS_Combustiveis,WS_Veiculos]
})

export class AppComponent implements OnInit {

  nomeAplicacao = "Aluguel de Carro - Versão Angular6";
  _marcas: Marca[] = [];
  _modelos: Modelo[] = [];
  _tipos: Tipo[] = [];
  _cores: Cor[] = [];
  _combustiveis: Combustivel[] = [];
  _veiculos: Veiculo[] = [];
  validarPlaca = /^[A-Z,a-z]{3}-\d{4}$/;

  constructor(private wsmarcas: WS_Marcas,
    private wsmodelos: WS_Modelos,
    private wstipos: WS_Tipos,
    private wscores: WS_Cores,
    private wscombustiveis: WS_Combustiveis,
    private wsveiculos: WS_Veiculos) {}

    carregarVeiculos() {
      
    this.wsveiculos.lerVeiculo().subscribe(veiculos => this._veiculos = veiculos);
    
      }
  
    atualizarPagina() {
      window.location.reload();
      }

    ngOnInit() {
        
      this.wsmarcas.lerMarcas().subscribe(marcas => this._marcas = marcas);
      this.wsmodelos.lerModelos().subscribe(modelos => this._modelos = modelos);
      this.wstipos.lerTipos().subscribe(tipos => this._tipos = tipos);
      this.wscores.lerCores().subscribe(cores => this._cores = cores);
      this.wscombustiveis.lerCombustiveis().subscribe(combustiveis => this._combustiveis = combustiveis);

      this.carregarVeiculos();

    }

    async adicionarCarro(carroMarca: string, carroModelo: string, carroPlaca: string, carroTipo: string, carroCor: string, carroAnoModelo: string,
                          carroCombustivel: string, carroDiaria: string) {
          let carro = {
              marca:carroMarca,
              modelo:carroModelo,
              placa:carroPlaca,
              tipo:carroTipo,
              cor:carroCor,
              anoModelo: carroAnoModelo,
              combustivel: carroCombustivel,
              diaria:carroDiaria
              };

      await this.wsveiculos.gravarVeiculo(carro).subscribe (
      sucesso => {
          alert("Veiculo adicionado com Sucesso!");
          this.carregarVeiculos();
          this.atualizarPagina();
      },
      falha => {alert("Falha na adição do veículo!\n"+falha);
    }
    );  
 
  }
}
