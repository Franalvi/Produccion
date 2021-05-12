import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // No sé de dónde ha salido pero daba error al guardar "No se pudo guardar "app.module.ts": el contenido del archivo es más reciente". He dado a comparar y se supone que la versión anterior de este documento tenía eso, así que lo he añadido.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms' //Para enlazar el click de la página y los campos que rellenas y que funcione. Habilita el ngModel que pones en el formulario.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

import { EncargadosService } from './services/encargados.service';
import { ExperienciaService } from './services/experiencia.service';
import { GrupoPuestosService } from './services/grupo-puestos.service';
import { IncidenciasService } from './services/incidencias.service';
import { IndiceIncidenciasService } from './services/indice-incidencias.service';
import { PlanificacionService } from './services/planificacion.service';
import { PuestosService } from './services/puestos.service';
import { RegistrosService } from './services/registros.service';
import { TrabajadoresService } from './services/trabajadores.service';

import {MaterialModule} from './material.module';

import { ListaTrabComponent } from './components/lista-trab/lista-trab.component';
import { FormTrabComponent } from './components/form-trab/form-trab.component';
import { ListaPuestosComponent } from './components/lista-puestos/lista-puestos.component';
import { FormPuestosComponent } from './components/form-puestos/form-puestos.component';
import { FormExperienciaComponent } from './components/form-experiencia/form-experiencia.component';
import { ListaExperienciaComponent } from './components/lista-experiencia/lista-experiencia.component';
import { ListaIndiceComponent } from './components/lista-indice/lista-indice.component';
import { FormIndiceComponent } from './components/form-indice/form-indice.component';
import { ListaIncidenciasComponent } from './components/lista-incidencias/lista-incidencias.component';
import { FormIncidenciasComponent } from './components/form-incidencias/form-incidencias.component';
import { ListaPlanificacionComponent } from './components/lista-planificacion/lista-planificacion.component';
import { FormPlanificacionComponent } from './components/form-planificacion/form-planificacion.component';
import { ListaRegistrosComponent } from './components/lista-registros/lista-registros.component';
import { FormRegistrosComponent } from './components/form-registros/form-registros.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormularioComponent,
    ListaComponent,
    ListaTrabComponent,
    FormTrabComponent,
    ListaPuestosComponent,
    FormPuestosComponent,
    FormExperienciaComponent,
    ListaExperienciaComponent,
    ListaIndiceComponent,
    FormIndiceComponent,
    ListaIncidenciasComponent,
    FormIncidenciasComponent,
    ListaPlanificacionComponent,
    FormPlanificacionComponent,
    ListaRegistrosComponent,
    FormRegistrosComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports:[

  ],
  providers: [
    EncargadosService,
    ExperienciaService,
    GrupoPuestosService,
    IncidenciasService,
    IndiceIncidenciasService,
    PlanificacionService,
    PuestosService,
    RegistrosService,
    TrabajadoresService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
