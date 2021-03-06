import { Component, HostBinding, OnInit } from '@angular/core';
import { Indice_Incidencias } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {IndiceIncidenciasService} from '../../services/indice-incidencias.service';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-indice',
  templateUrl: './form-indice.component.html',
  styleUrls: ['./form-indice.component.css']
})
export class FormIndiceComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  indiceinc: Indice_Incidencias = {
    id_indice: 0,
    nombre_incidencia: '',
    descripcion: ''
  };

  edit: boolean = false;

  constructor(private valladolidService: IndiceIncidenciasService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getIndiceIncidencia(params.id)
        .subscribe(
          res => {
            this.indiceinc = res[0];
            console.log(this.indiceinc)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarIndiceIncidencias () {
    if (this.indiceinc.nombre_incidencia != "" && this.indiceinc.nombre_incidencia != null && this.indiceinc.descripcion != "" && this.indiceinc.descripcion != null) {

    delete this.indiceinc.id_indice;

    console.log(this.indiceinc);
    this.valladolidService.saveIndiceIncidencias(this.indiceinc)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/indiceinc']);
        },
        err => console.error(err)
    )
  } else {
    this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
      duration: 5000,
    });
  }
  }

  updateIndiceIncidencias () {
    if (this.indiceinc.nombre_incidencia != "" && this.indiceinc.nombre_incidencia != null && this.indiceinc.descripcion != "" && this.indiceinc.descripcion != null) {

    console.log(this.edit)
    console.log(this.indiceinc)
    console.log(this.indiceinc.id_indice)
    this.valladolidService.updateIndiceIncidencias(this.indiceinc.id_indice, this.indiceinc)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/indiceinc']);
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
