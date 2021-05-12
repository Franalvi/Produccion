import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListaComponent} from './components/lista/lista.component'
import {FormularioComponent} from './components/formulario/formulario.component'
import {ListaTrabComponent} from './components/lista-trab/lista-trab.component'
import {FormTrabComponent} from './components/form-trab/form-trab.component'
import {ListaPuestosComponent} from './components/lista-puestos/lista-puestos.component'
import {FormPuestosComponent} from './components/form-puestos/form-puestos.component'
import {ListaExperienciaComponent} from './components/lista-experiencia/lista-experiencia.component'
import {FormExperienciaComponent} from './components/form-experiencia/form-experiencia.component'
import {ListaIndiceComponent} from './components/lista-indice/lista-indice.component'
import {FormIndiceComponent} from './components/form-indice/form-indice.component'
import {ListaIncidenciasComponent} from './components/lista-incidencias/lista-incidencias.component'
import {FormIncidenciasComponent} from './components/form-incidencias/form-incidencias.component'
import {ListaPlanificacionComponent} from './components/lista-planificacion/lista-planificacion.component'
import {FormPlanificacionComponent} from './components/form-planificacion/form-planificacion.component'
import {ListaRegistrosComponent} from './components/lista-registros/lista-registros.component'
import {FormRegistrosComponent} from './components/form-registros/form-registros.component'
import {IndexComponent} from './components/index/index.component'


const routes: Routes = [
  
  {
    path:'',
    component: IndexComponent
  },

  //Encargados
  {
    path:'tabla/encargados',
    component: ListaComponent
  },
  {
    path: 'tabla/encargados/nuevo', //Para añadir nuevos
    component: FormularioComponent
  },
  {
    path: 'tabla/encargados/editar/:id', // Para editar
    component: FormularioComponent
  },

  //Trabajadores
  {
    path:'tabla/trab',
    component: ListaTrabComponent
  },
  {
    path:'tabla/trab/nuevo',
    component: FormTrabComponent
  },
  {
    path:'tabla/trab/editar/:id',
    component: FormTrabComponent
  },

  //Puestos
  {
    path:'tabla/puestos',
    component: ListaPuestosComponent
  },
  {
    path:'tabla/puestos/nuevo',
    component: FormPuestosComponent
  },
  {
    path:'tabla/puestos/editar/:id',
    component: FormPuestosComponent
  },

  //Experiencia
  {
    path:'tabla/experiencia',
    component: ListaExperienciaComponent
  },
  {
    path:'tabla/experiencia/nuevo',
    component: FormExperienciaComponent
  },
  {
    path:'tabla/experiencia/editar/:id',
    component: FormExperienciaComponent
  },

    //Índice de incidencias
    {
      path:'tabla/indiceinc',
      component: ListaIndiceComponent
    },
    {
      path:'tabla/indiceinc/nuevo',
      component: FormIndiceComponent
    },
    {
      path:'tabla/indiceinc/editar/:id',
      component: FormIndiceComponent
    },

    //Incidencias
    {
      path:'tabla/incidencias',
      component: ListaIncidenciasComponent
    },
    {
      path:'tabla/incidencias/nuevo',
      component: FormIncidenciasComponent
    },
    {
      path:'tabla/incidencias/editar/:id',
      component: FormIncidenciasComponent
    },

    //Planificación
    {
      path:'tabla/planificacion',
      component: ListaPlanificacionComponent
    },
    {
      path:'tabla/planificacion/nuevo',
      component: FormPlanificacionComponent
    },
    {
      path:'tabla/planificacion/editar/:id',
      component: FormPlanificacionComponent
    },

    //Registros
    {
      path:'tabla/registros',
      component: ListaRegistrosComponent
    },
    {
      path:'tabla/registros/nuevo',
      component: FormRegistrosComponent
    },
    {
      path:'tabla/registros/editar/:id',
      component: FormRegistrosComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
