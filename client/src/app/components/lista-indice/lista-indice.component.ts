import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Indice_Incidencias } from 'src/app/models/valladolid';
import { IndiceIncidenciasService } from '../../services/indice-incidencias.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-indice',
  templateUrl: './lista-indice.component.html',
  styleUrls: ['./lista-indice.component.css']
})
export class ListaIndiceComponent implements OnInit {

  ELEMENT_DATA: Indice_Incidencias[] = [];
  displayedColumns: string[] = ['nombre_incidencia', 'descripcion', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Indice_Incidencias>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: IndiceIncidenciasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getIndiceIncidencias();
  }

  getIndiceIncidencias() {
    let resp = this.valladolidService.getIndiceIncidencias();
    resp.subscribe(report=>this.dataSource.data=report as Indice_Incidencias[])
  }

  deleteIndiceIncidencias(id_trabajador: string) {
    this.valladolidService.deleteIndiceIncidencias(id_trabajador).subscribe(
      res => {
        console.log(res)
        this.getIndiceIncidencias();
      },
      err => console.log(err)
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    console.log(filterValue);
  }
}
