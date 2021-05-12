import { Component, HostBinding, OnInit } from '@angular/core';
import { Incidencias } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import { IncidenciasService } from '../../services/incidencias.service';
import { TrabajadoresService } from "../../services/trabajadores.service";
import { PuestosService } from "../../services/puestos.service";
import { IndiceIncidenciasService } from "../../services/indice-incidencias.service";
import { formatDate } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';


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
  trabajadores;
  puestos;
  indiceincs;
  constructor(private incidenciaService: IncidenciasService, private trabajadoresService: TrabajadoresService,  private puestosService: PuestosService, private indiceIncidenciasService: IndiceIncidenciasService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.getIncidencias(params);
    this.getTrabajadores();
    this.getPuestos();
    this.getIndiceInc();
  }

  getIncidencias (params){
    if (params.id) {
      this.incidenciaService.getIncidencia(params.id)
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

  getIndiceInc(){
    this.indiceIncidenciasService.getIndiceIncidencias().subscribe(
      res=>{
        this.indiceincs = res;
      },
      err=> console.log(err)
    )
  }

  guardarIncidencias () {
    if (this.incidencia.fecha != null && this.incidencia.fecha != "" && this.incidencia.id_trabajador != null && this.incidencia.id_puesto != null && this.incidencia.indice != null && this.incidencia.tiempo != null && this.incidencia.descripcion != "" && this.incidencia.descripcion != null) {

    delete this.incidencia.id_incidencia;
    console.log(this.incidencia);
    this.incidenciaService.saveIncidencias(this.incidencia)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/incidencias']);
        },
        err => console.error(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }
  cambioFecha(){
    console.log('ENTRA')
    if(this.incidencia.fecha != null){
       this.incidencia.fecha = formatDate(this.incidencia.fecha, 'yyyy-MM-dd', 'en')
    }
  }

  updateIncidencias () {
    if (this.incidencia.fecha != null && this.incidencia.fecha != "" && this.incidencia.id_trabajador != null && this.incidencia.id_puesto != null && this.incidencia.indice != null && this.incidencia.tiempo != null && this.incidencia.descripcion != "" && this.incidencia.descripcion != null) {


    console.log(this.edit)
    console.log(this.incidencia)
    console.log(this.incidencia.id_incidencia)
    this.incidenciaService.updateIncidencias(this.incidencia.id_incidencia, this.incidencia)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/incidencias']);
        },
        err => console.log(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }

}
