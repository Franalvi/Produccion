import { Component, HostBinding, OnInit } from '@angular/core';
import { Planificacion } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {PlanificacionService} from '../../services/planificacion.service';

@Component({
  selector: 'app-form-planificacion',
  templateUrl: './form-planificacion.component.html',
  styleUrls: ['./form-planificacion.component.css']
})
export class FormPlanificacionComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  planificacion: Planificacion = {
    id_orden: 0,
    fecha: '',
    id_trabajador: null,
    id_puesto: null,
    numero: null
  };

  edit: boolean = false;

  constructor(private valladolidService: PlanificacionService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getPlan(params.id)
        .subscribe(
          res => {
            this.planificacion = res[0];
            console.log(this.planificacion)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarPlan () {
    delete this.planificacion.id_orden;

    console.log(this.planificacion);
    this.valladolidService.savePlanificacion(this.planificacion)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/planificacion']);
        },
        err => console.error(err)
    )
  }

  updatePlanificacion () {


    console.log(this.edit)
    console.log(this.planificacion)
    console.log(this.planificacion.id_orden)
    this.valladolidService.updatePlanificacion(this.planificacion.id_orden, this.planificacion)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/planificacion']);
        },
        err => console.log(err)
    )
  }

}
