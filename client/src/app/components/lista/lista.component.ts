import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Encargados } from 'src/app/models/valladolid';
import { EncargadosService } from '../../services/encargados.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  ELEMENT_DATA: Encargados[] = [];
  displayedColumns: string[] = ['nombre', 'id_alfabetico', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Encargados>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: EncargadosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEncargados();
  }

  getEncargados() {
    let resp = this.valladolidService.getEncargados();
    resp.subscribe(report=>this.dataSource.data=report as Encargados[])
  }

  deleteEncargado(id_trabajador: string) {
    this.valladolidService.deleteEncargado(id_trabajador).subscribe(
      res => {
        console.log(res)
        this.getEncargados();
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