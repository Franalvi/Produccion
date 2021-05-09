import { Component, HostBinding, OnInit } from '@angular/core';
import { Trabajadores } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {TrabajadoresService} from '../../services/trabajadores.service';

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

  edit: boolean = false;

  constructor(private valladolidService: TrabajadoresService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getTrabajador(params.id)
        .subscribe(
          res => {
            this.trabajador = res[0];
            console.log(this.trabajador)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarTrabajador () {
    delete this.trabajador.id_trabajador;

    console.log(this.trabajador);
    this.valladolidService.saveTrabajador(this.trabajador)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/trab']);
        },
        err => console.error(err)
    )
  }

  updateTrabajador () {


    console.log(this.edit)
    console.log(this.trabajador)
    console.log(this.trabajador.id_trabajador)
    this.valladolidService.updateTrabajador(this.trabajador.id_trabajador, this.trabajador)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/trab']);
        },
        err => console.log(err)
    )
  }

}
