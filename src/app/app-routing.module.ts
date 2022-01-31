import { NgModule} from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from './pais/pages/error404/error404.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

/*
    Path se usa para configurar que va aparecer el cada
    ruta
*/
const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    }, 
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    }, 
    {
        path: '**',
        component: Error404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}