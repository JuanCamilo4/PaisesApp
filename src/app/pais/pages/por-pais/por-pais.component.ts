import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  boolError: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string ) {
    this.boolError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
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

    if (this.termino == "") this.mostrarSugerencias = false; 
    else this.mostrarSugerencias = true;

    if (termino == "") {
      this.paisesSugeridos = [];
      return;
    }
    
    this.paisService.buscarPais(termino)
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
