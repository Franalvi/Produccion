import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListaComponent} from './components/lista/lista.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabla',
    pathMatch: 'full'
  },
  {
    path:'tabla',
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
