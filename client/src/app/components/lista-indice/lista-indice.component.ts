import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IndiceIncidenciasService } from '../../services/indice-incidencias.service'

@Component({
  selector: 'app-lista-indice',
  templateUrl: './lista-indice.component.html',
  styleUrls: ['./lista-indice.component.css']
})
export class ListaIndiceComponent implements OnInit {

  indiceinc: any = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.indiceinc);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: IndiceIncidenciasService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getIndiceIncidencias();
  }

  getIndiceIncidencias() {
    this.valladolidService.getIndiceIncidencias().subscribe(
      res => {
        this.indiceinc = res;
        console.log(this.indiceinc);
      },
      err => console.error(err)
    );
  }

  deleteIndiceIncidencias(id_indice: string) {
    this.valladolidService.deleteIndiceIncidencias(id_indice).subscribe(
      res => {
        console.log(res)
        this.getIndiceIncidencias();
      },
      err => console.log(err)
    )
  }
}
