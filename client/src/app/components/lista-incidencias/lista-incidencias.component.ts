import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Incidencias } from 'src/app/models/valladolid';
import { IncidenciasService } from '../../services/incidencias.service'
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.css']
})
export class ListaIncidenciasComponent implements OnInit {

  ELEMENT_DATA: Incidencias[] = [];
  displayedColumns: string[] = ['fecha', 'trabajador', 'puesto', 'indice', 'tiempo', 'descripcion', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Incidencias>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: IncidenciasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getIncidencias();
  }

  getIncidencias() {
    let resp = this.valladolidService.getIncidencias();
    resp.subscribe(report=>this.dataSource.data=report as Incidencias[])
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    console.log(filterValue);
  }
  convertDate(date: Date) {
    if (date != null) {
      return formatDate(date, 'dd/MM/yyyy', 'en')
    } else {
      return null
    }
  }
}
