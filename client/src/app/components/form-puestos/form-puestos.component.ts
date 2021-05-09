import { Component, HostBinding, OnInit } from '@angular/core';
import { Puestos } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {PuestosService} from '../../services/puestos.service';

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

  constructor(private valladolidService: PuestosService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getPuesto(params.id)
        .subscribe(
          res => {
            this.puesto = res[0];
            console.log(this.puesto)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarPuesto () {
    delete this.puesto.id_puesto;

    console.log(this.puesto);
    this.valladolidService.savePuesto(this.puesto)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/puestos']);
        },
        err => console.error(err)
    )
  }

  updatePuesto () {


    console.log(this.edit)
    console.log(this.puesto)
    console.log(this.puesto.id_puesto)
    this.valladolidService.updatePuesto(this.puesto.id_puesto, this.puesto)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/puestos']);
        },
        err => console.log(err)
    )
  }

}
