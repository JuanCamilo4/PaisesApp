import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regionActiva: string = "";
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string): string {
    return (region == this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe(data => {
        this.paises = data;
      });

  }

}
