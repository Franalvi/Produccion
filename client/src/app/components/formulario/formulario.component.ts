import { Component, HostBinding, OnInit } from '@angular/core';
import { Encargados } from 'src/app/models/valladolid';
import { ActivatedRoute, Router } from '@angular/router';

import { EncargadosService } from '../../services/encargados.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  encargado: Encargados = {
    id_encargado: 0,
    nombre: '',
    turno: null,
    id_alfabetico: ''
  };

  edit: boolean = false;

  constructor(private valladolidService: EncargadosService, private router: Router, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params; // Tiene el número del encargado que quiero actualizar. Lo coge de la barra de dirección del navegador.
    console.log(params)
    if (params.id) {
      this.valladolidService.getEncargado(params.id)
        .subscribe(
          res => {
            this.encargado = res[0];
            console.log(this.encargado)
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  guardarEncargado() {
    this.encargado.turno = 0
    if (this.encargado.nombre != "" && this.encargado.nombre != null && this.encargado.id_alfabetico != "" && this.encargado.id_alfabetico != null) {
      delete this.encargado.id_encargado;

      console.log(this.encargado);
      this.valladolidService.saveEncargado(this.encargado)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/tabla/encargados']);
          },
          err => console.error(err)
        )
    } else {
      this._snackBar.open('No se han insertado todos los datos, insértelos y pruebe de nuevo. 🍕', 'X' ,{
        duration: 5000,
      });
    }
  }

  updateEncargado() {
    this.encargado.turno = 0
    if (this.encargado.nombre != "" && this.encargado.nombre != null && this.encargado.id_alfabetico != "" && this.encargado.id_alfabetico != null) {
      console.log(this.edit) // En True está en modo edición.
      console.log(this.encargado) // Para ver los datos que le pasamos.
      console.log(this.encargado.id_encargado)
      this.valladolidService.updateEncargado(this.encargado.id_encargado, this.encargado) // Lo que no funciona. Debería mandar los datos a la base de datos pero por lo que sea no actualiza.
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/tabla/encargados']);
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
