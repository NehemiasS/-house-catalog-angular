import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {DetailsComponent} from './details/details.component';


 const routeConfig: Routes = [
    {
      path: '',
      component: CatalogoComponent,
      title: 'Catalogo page',
       pathMatch: 'full'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Catalogo details'
    },
  ];

  // @NgModule({
  //   imports: [RouterModule.forRoot(routeConfig)],
  //   exports: [RouterModule]
  // })

  //export class AppRoutingModule {}
  export default routeConfig;