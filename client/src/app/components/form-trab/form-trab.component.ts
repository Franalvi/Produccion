import { Component, HostBinding, OnInit } from '@angular/core';
import { Trabajadores } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {TrabajadoresService} from '../../services/trabajadores.service';
import {EncargadosService} from '../../services/encargados.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-trab',
  templateUrl: './form-trab.component.html',
  styleUrls: ['./form-trab.component.css']
})
export class FormTrabComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  trabajador: Trabajadores = {
    id_trabajador: 0,
    nombre: '',
    turno: null,
    id_alfabetico: ''
  };
  turno = null;
  edit: boolean = false;
  encargados;

  constructor(private trabajadoresService: TrabajadoresService, private encargadosService: EncargadosService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.trabajadoresService.getTrabajador(params.id)
        .subscribe(
          res => {
            this.trabajador = res[0];
            console.log(this.trabajador)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
    this.getEncargados();
  }

  getEncargados() {
    
    this.encargadosService.getEncargados().subscribe(
      res =>{
        console.log(res)
        this.encargados = res
      },
      err => console.log(err)
    );
  }

  guardarTrabajador () {
    if (this.trabajador.nombre != "" && this.trabajador.nombre != null && this.trabajador.turno != null && this.trabajador.id_alfabetico != "" && this.trabajador.id_alfabetico != null) {

    console.log(this.trabajador.turno)
    delete this.trabajador.id_trabajador;

    console.log(this.trabajador);
    this.trabajadoresService.saveTrabajador(this.trabajador)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/trab']);
        },
        err => console.error(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }

  updateTrabajador () {
    if (this.trabajador.nombre != "" && this.trabajador.nombre != null && this.trabajador.turno != null && this.trabajador.id_alfabetico != "" && this.trabajador.id_alfabetico != null) {

    console.log(this.edit)
    console.log(this.trabajador)
    console.log(this.trabajador.id_trabajador)
    this.trabajadoresService.updateTrabajador(this.trabajador.id_trabajador, this.trabajador)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/trab']);
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
