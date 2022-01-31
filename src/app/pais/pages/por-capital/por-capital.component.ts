import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  boolError: boolean = false;
  paises: Country[] = [];
  mostrarSugerencias: boolean = false;
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string ) {
    this.boolError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe(res => {
        console.log(res);
        this.paises = res;
        
      }, err => {
        this.boolError = true;
        console.log(err);
        this.paises = [];
      });
  }

  sugerencias(termino: string){

    this.termino = termino;
    this.mostrarSugerencias = true;

    if (termino == "") {
      this.paisesSugeridos = [];
      return;
    }
    
    this.paisService.buscarCapital(termino)
      .subscribe(paises => {
        this.paisesSugeridos = paises.splice(0, 3);
      },
      (err) => {
        this.paisesSugeridos = [];
      })
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }

}
