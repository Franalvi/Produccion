import { Component, HostBinding, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import { ExperienciaService } from '../../services/experiencia.service';
import { TrabajadoresService } from "../../services/trabajadores.service";
import { PuestosService } from "../../services/puestos.service";

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  experiencia: Experiencia = {
    id_experiencia: 0,
    id_trabajador: null,
    id_puesto: null,
    disponible: null,
    experiencia: null
  };

  edit: boolean = false;
  trabajadores;
  puestos;
  constructor(private experienciaService: ExperienciaService, private trabajadoresService: TrabajadoresService, private puestosService: PuestosService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.getExperiencia(params)
    this.getTrabajadores()
    this.getPuestos()
  }

  getExperiencia(params) {
    if (params.id) {
      this.experienciaService.getExperiencia(params.id)
        .subscribe(
          res => {
            this.experiencia = res[0];
            console.log(this.experiencia)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  getTrabajadores() {
    this.trabajadoresService.getTrabajadores().subscribe(
      res => {
        this.trabajadores = res;
      },
      err => console.log(err)
    )
  }

  getPuestos() {
    this.puestosService.getPuestos().subscribe(
      res => {
        this.puestos = res;
      },
      err => console.log(err)
    )
  }

  guardarExperiencia() {
    delete this.experiencia.id_experiencia;
    if (this.experiencia.id_trabajador != null && this.experiencia.id_puesto != null && this.experiencia.disponible != null && this.experiencia.experiencia != null) {

      console.log(this.experiencia);
      this.experienciaService.saveExperiencias(this.experiencia)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/tabla/experiencia']);
          },
          err => console.error(err)
        )
    } else {
      this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X', {
        duration: 5000,
      });
    }
  }

  updateExperiencia() {
    if (this.experiencia.id_trabajador != null && this.experiencia.id_puesto != null && this.experiencia.disponible != null && this.experiencia.experiencia != null) {


      console.log(this.edit)
      console.log(this.experiencia)
      console.log(this.experiencia.id_experiencia)
      this.experienciaService.updateExperiencias(this.experiencia.id_experiencia, this.experiencia)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/tabla/experiencia']);
          },
          err => console.log(err)
        )
    } else {
      this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X', {
        duration: 5000,
      });
    }
  }
}
