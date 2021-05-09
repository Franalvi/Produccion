import { Component, HostBinding, OnInit } from '@angular/core';
import { Incidencias } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {IncidenciasService} from '../../services/incidencias.service';

@Component({
  selector: 'app-form-incidencias',
  templateUrl: './form-incidencias.component.html',
  styleUrls: ['./form-incidencias.component.css']
})
export class FormIncidenciasComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  incidencia: Incidencias = {
    id_incidencia: 0,
    fecha: '',
    id_trabajador: null,
    id_puesto: null,
    indice: null,
    tiempo: null,
    descripcion: ''
  };

  edit: boolean = false;

  constructor(private valladolidService: IncidenciasService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getIncidencia(params.id)
        .subscribe(
          res => {
            this.incidencia = res[0];
            console.log(this.incidencia)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarIncidencias () {
    delete this.incidencia.id_incidencia;

    console.log(this.incidencia);
    this.valladolidService.saveIncidencias(this.incidencia)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/incidencias']);
        },
        err => console.error(err)
    )
  }

  updateIncidencias () {


    console.log(this.edit)
    console.log(this.incidencia)
    console.log(this.incidencia.id_incidencia)
    this.valladolidService.updateIncidencias(this.incidencia.id_incidencia, this.incidencia)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/incidencias']);
        },
        err => console.log(err)
    )
  }

}
