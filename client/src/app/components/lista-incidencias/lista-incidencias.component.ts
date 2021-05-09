import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IncidenciasService } from '../../services/incidencias.service'

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.css']
})
export class ListaIncidenciasComponent implements OnInit {

  incidencias: any = [];
  displayedColumns: string[] = ['fecha', 'trabajador', 'puesto', 'indice', 'tiempo', 'descripcion', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.incidencias);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: IncidenciasService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getIncidencias();
  }

  getIncidencias() {
    this.valladolidService.getIncidencias().subscribe(
      res => {
        this.incidencias = res;
        console.log(this.incidencias);
      },
      err => console.error(err)
    );
  }

  deleteIncidencias(id_incidencia: string) {
    this.valladolidService.deleteIncidencias(id_incidencia).subscribe(
      res => {
        console.log(res)
        this.getIncidencias();
      },
      err => console.log(err)
    )
  }
}
