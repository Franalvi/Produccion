import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Registros } from 'src/app/models/valladolid';
import { RegistrosService } from '../../services/registros.service'
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {

  ELEMENT_DATA: Registros[] = [];
  displayedColumns: string[] = ['fecha', 'id_trabajador', 'id_puesto', 'cantidad_total', 'cantidad_realizada', 'tiempo_total', 'tiempo_empleado', 'tiempo_disponible', 'tiempo_perdido', 'produccion', 'productividad', 'ritmo','tiempo_restante', 'cambio_turno', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Registros>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: RegistrosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getRegistros();
  }

  getRegistros() {
    let resp = this.valladolidService.getRegistros();
    resp.subscribe(report=>this.dataSource.data=report as Registros[])
  }

  deleteRegistros(id_registro: string) {
    this.valladolidService.deleteRegistros(id_registro).subscribe(
      res => {
        console.log(res)
        this.getRegistros();
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
