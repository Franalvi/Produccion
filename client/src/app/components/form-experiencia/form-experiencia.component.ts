import { Component, HostBinding, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import {ExperienciaService} from '../../services/experiencia.service';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  experiencia: Experiencia = {
    id_experiencia: 0,
    id_trabajador: null,
    id_puesto: null,
    disponible: null,
    experiencia: null
  };

  edit: boolean = false;

  constructor(private valladolidService: ExperienciaService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id) {
      this.valladolidService.getExperiencia(params.id)
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

  guardarExperiencia () {
    delete this.experiencia.id_experiencia;

    console.log(this.experiencia);
    this.valladolidService.saveExperiencias(this.experiencia)
      .subscribe (
        res => {
          console.log(res)
          this.router.navigate(['/tabla/experiencia']);
        },
        err => console.error(err)
    )
  }

  updateExperiencia () {


    console.log(this.edit)
    console.log(this.experiencia)
    console.log(this.experiencia.id_experiencia)
    this.valladolidService.updateExperiencias(this.experiencia.id_experiencia, this.experiencia)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/tabla/experiencia']);
        },
        err => console.log(err)
    )
  }

}
