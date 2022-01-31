import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  //El route sirve ara detectar los cambios del URL
  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService,
    ) { }


  ngOnInit(): void {

    /*this.activateRoute.params
      .subscribe(params => {
        console.log(params);

        this.paisService.getPais(params.id)
          .subscribe(pais => {
            console.log(pais);
          })

      });*/


      //Está forma es usando rxjs
      this.activateRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPais(params.id)),
        tap(res => console.log(res))
      )
      .subscribe(pais => {
        this.pais = pais[0]
        console.log(this.pais)
      });

  }

}
