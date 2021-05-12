import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Puestos } from 'src/app/models/valladolid';
import { PuestosService } from '../../services/puestos.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-puestos',
  templateUrl: './lista-puestos.component.html',
  styleUrls: ['./lista-puestos.component.css']
})
export class ListaPuestosComponent implements OnInit {

  ELEMENT_DATA: Puestos[] = [];
  displayedColumns: string[] = ['nombre', 'tiempo', 'grupo', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Puestos>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private puestosService: PuestosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPuestos();
  }

  getPuestos() {
    let resp = this.puestosService.getPuestos();
    resp.subscribe(report=>this.dataSource.data=report as Puestos[])
  }

  deletePuesto(id_puesto: string) {
    this.puestosService.deletePuesto(id_puesto).subscribe(
      res => {
        console.log(res)
        this.getPuestos();
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
