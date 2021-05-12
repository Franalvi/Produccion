import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Trabajadores } from 'src/app/models/valladolid';
import { TrabajadoresService } from '../../services/trabajadores.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-trab',
  templateUrl: './lista-trab.component.html',
  styleUrls: ['./lista-trab.component.css']
})
export class ListaTrabComponent implements OnInit {

  ELEMENT_DATA: Trabajadores[] = [];
  displayedColumns: string[] = ['nombre', 'encargado', 'id_alfabetico', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Trabajadores>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: TrabajadoresService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getTrabajadores();
  }

  getTrabajadores() {
    let resp = this.valladolidService.getTrabajadores();
    resp.subscribe(report=>this.dataSource.data=report as Trabajadores[])
  }

  deleteTrabajador(id_trabajador: string) {
    this.valladolidService.deleteTrabajador(id_trabajador).subscribe(
      res => {
        console.log(res)
        this.getTrabajadores();
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
