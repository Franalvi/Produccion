import { Component, HostBinding, OnInit } from '@angular/core';
import { Registros } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {RegistrosService} from '../../services/registros.service';

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

  constructor(private valladolidService: RegistrosService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getRegistro(params.id)
        .subscribe(
          res => {
            this.registro = res[0];
            console.log(this.registro)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarRegistro () {
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
  }

  updateRegistro () {


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
  }

}
