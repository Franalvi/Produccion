import { Component, HostBinding, OnInit } from '@angular/core';
//import { Encargados } from 'src/app/models/valladolid';
import {MatTableDataSource} from '@angular/material/table';

import { EncargadosService } from '../../services/encargados.service'


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  encargados: any = [];
  displayedColumns: string[] = ['nombre', 'turno', 'id_alfabetico', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.encargados);
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: EncargadosService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getEncargados();
  }

  getEncargados() {
    this.valladolidService.getEncargados().subscribe(
      res => {
        this.encargados = res;
        console.log(this.encargados);
      },
      err => console.error(err)
    );
  }

  deleteEncargado(id_encargado: string) {
    this.valladolidService.deleteEncargado(id_encargado).subscribe(
      res => {
        console.log(res)
        this.getEncargados();
      },
      err => console.log(err)
    )
  }
}