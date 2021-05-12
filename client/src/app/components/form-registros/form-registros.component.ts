import { Component, HostBinding, OnInit } from '@angular/core';
import { Registros } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {RegistrosService} from '../../services/registros.service';
import { formatDate } from '@angular/common';
import { TrabajadoresService } from "../../services/trabajadores.service";
import { PuestosService } from "../../services/puestos.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-registros',
  templateUrl: './form-registros.component.html',
  styleUrls: ['./form-registros.component.css']
})
export class FormRegistrosComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  registro: Registros = {
    id_registro: 0,
    fecha: '',
    id_trabajador: null,
    id_puesto: null,
    cantidad_total: null,
    cantidad_realizada: null,
    tiempo_total: null,
    tiempo_empleado: null,
    tiempo_disponible: null,
    tiempo_perdido: null,
    produccion: null,
    productividad: null,
    ritmo: null,
    tiempo_restante: null,
    cambio_turno: null,
  };

  edit: boolean = false;
  trabajadores
  puestos
  cambioTurno = null;

  constructor(private valladolidService: RegistrosService, private trabajadoresService: TrabajadoresService,  private puestosService: PuestosService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.getTrabajadores()
    this.getPuestos()
    this.getRegistros(params)
  }
  getRegistros(params) {
    if (params.id) {
      this.valladolidService.getRegistro(params.id)
        .subscribe(
          res => {
            this.registro = res[0];
            this.edit = true;
            this.queTurno();
          },
          err => console.log(err)
        )
    }
  }
  guardarRegistro () {
    if (this.registro.fecha != "" && this.registro.fecha != null && this.registro.id_trabajador != null && this.registro.id_puesto != null && this.registro.cantidad_total != null && this.registro.cantidad_realizada != null && this.registro.tiempo_total != null && this.registro.tiempo_empleado != null && this.registro.tiempo_disponible != null && this.registro.tiempo_perdido != null && this.registro.produccion != null && this.registro.productividad != null && this.registro.ritmo != null && this.registro.tiempo_restante != null && this.registro.cambio_turno != null) {

    delete this.registro.id_registro;

    console.log(this.registro);
    this.valladolidService.saveRegistros(this.registro)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/registros']);
        },
        err => console.error(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }

  updateRegistro () {
    if (this.registro.fecha != "" && this.registro.fecha != null && this.registro.id_trabajador != null && this.registro.id_puesto != null && this.registro.cantidad_total != null && this.registro.cantidad_realizada != null && this.registro.tiempo_total != null && this.registro.tiempo_empleado != null && this.registro.tiempo_disponible != null && this.registro.tiempo_perdido != null && this.registro.produccion != null && this.registro.productividad != null && this.registro.ritmo != null && this.registro.tiempo_restante != null && this.registro.cambio_turno != null) {


    console.log(this.edit)
    console.log(this.registro)
    console.log(this.registro.id_registro)
    this.valladolidService.updateRegistros(this.registro.id_registro, this.registro)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/registros']);
        },
        err => console.log(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
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
  cambioFecha(){
    if(this.registro.fecha != null){
       this.registro.fecha = formatDate(this.registro.fecha, 'yyyy-MM-dd', 'en')
    }
  }

  queTurno(){
    if (this.registro.cambio_turno == 1) {
      this.cambioTurno = 1
    }else{
      this.cambioTurno = 0
    }
  }

  cambioDeTurno(){
    this.registro.cambio_turno = this.cambioTurno;
  }

}
