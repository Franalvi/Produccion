import { Component, HostBinding, OnInit } from '@angular/core';
import { Puestos } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {PuestosService} from '../../services/puestos.service';
import {GrupoPuestosService} from '../../services/grupo-puestos.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-form-puestos',
  templateUrl: './form-puestos.component.html',
  styleUrls: ['./form-puestos.component.css']
})
export class FormPuestosComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  puesto: Puestos = {
    id_puesto: 0,
    nombre: '',
    tiempo: null,
    grupo: null
  };

  edit: boolean = false;
  grupos
  constructor(private puestosService: PuestosService, private grupoPuestosService: GrupoPuestosService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.puestosService.getPuesto(params.id)
        .subscribe(
          res => {
            this.puesto = res[0];
            this.edit = true;
          },
          err => console.log(err)
        )
    }
    this.getPuestos()
  }

  getPuestos(){
    this.grupoPuestosService.getGrupoPuestos().subscribe(
      res=>{
        this.grupos = res
      },
      err => console.log(err)
    )
  }

  guardarPuesto () {
    if (this.puesto.nombre != "" && this.puesto.nombre != null && this.puesto.tiempo != null && this.puesto.grupo != null) {

    delete this.puesto.id_puesto;

    console.log(this.puesto);
    this.puestosService.savePuesto(this.puesto)
      .subscribe (
        res => {
          this.router.navigate(['/tabla/puestos']);
        },
        err => console.error(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }

  updatePuesto () {
    if (this.puesto.nombre != "" && this.puesto.nombre != null && this.puesto.tiempo != null && this.puesto.grupo != null) {

    this.puestosService.updatePuesto(this.puesto.id_puesto, this.puesto)
      .subscribe(
        res => {
          this.router.navigate(['/tabla/puestos']);
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
