import { Component, HostBinding, OnInit } from '@angular/core';
import { Planificacion } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {PlanificacionService} from '../../services/planificacion.service';
import { formatDate } from '@angular/common';
import { TrabajadoresService } from "../../services/trabajadores.service";
import { PuestosService } from "../../services/puestos.service";

import { MatSnackBar } from '@angular/material/snack-bar';

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
  trabajadores
  puestos
  edit: boolean = false;

  constructor(private planificacionService: PlanificacionService, private trabajadoresService: TrabajadoresService,  private puestosService: PuestosService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.getTrabajadores()
    this.getPuestos()
    this.getplanificaciones(params)
  }

  getplanificaciones(params){
    if (params.id) {
      this.planificacionService.getPlan(params.id)
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
    if (this.planificacion.fecha != "" && this.planificacion.fecha != null && this.planificacion.id_trabajador != null && this.planificacion.id_puesto != null && this.planificacion.numero != null) {

    delete this.planificacion.id_orden;

    console.log(this.planificacion);
    this.planificacionService.savePlanificacion(this.planificacion)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/planificacion']);
        },
        err => console.error(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }

  updatePlanificacion () {
    if (this.planificacion.fecha != "" && this.planificacion.fecha != null && this.planificacion.id_trabajador != null && this.planificacion.id_puesto != null && this.planificacion.numero != null) {

    console.log(this.edit)
    console.log(this.planificacion)
    console.log(this.planificacion.id_orden)
    this.planificacionService.updatePlanificacion(this.planificacion.id_orden, this.planificacion)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/planificacion']);
        },
        err => console.log(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }
  cambioFecha(){
    console.log('ENTRA')
    if(this.planificacion.fecha != null){
       this.planificacion.fecha = formatDate(this.planificacion.fecha, 'yyyy-MM-dd', 'en')
    }
  }

  getTrabajadores(){
    this.trabajadoresService.getTrabajadores().subscribe(
      res=>{
        this.trabajadores = res;
      },
      err=> console.log(err)
    )
  }

  getPuestos(){
    this.puestosService.getPuestos().subscribe(
      res=>{
        this.puestos = res;
      },
      err=> console.log(err)
    )
  }

}
