import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Espacio1Component } from './espacio1/espacio1.component';
import { Espacio2Component } from './espacio2/espacio2.component';
import { Espacio3Component } from './espacio3/espacio3.component';
import { Espacio4Component } from './espacio4/espacio4.component';
import { Espacio5Component } from './espacio5/espacio5.component';
import { Espacio6Component } from './espacio6/espacio6.component';

const routes: Routes = [
  {
    path:'espacio1',
    component:Espacio1Component
  },
  {
    path:'espacio2',
    component:Espacio2Component
  },
  {
    path:'espacio3',
    component:Espacio3Component
  },
  {
    path:'espacio4',
    component:Espacio4Component
  },
    {
    path:'espacio5',
    component:Espacio5Component
  },
    {
    path:'espacio6',
    component:Espacio6Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
