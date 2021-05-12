import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Experiencia } from 'src/app/models/valladolid';
import { ExperienciaService } from '../../services/experiencia.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css']
})
export class ListaExperienciaComponent implements OnInit {

  ELEMENT_DATA: Experiencia[] = [];
  displayedColumns: string[] = ['trabajador', 'puesto', 'disponible', 'experiencia', 'editar', 'borrar'];
  dataSource = new MatTableDataSource<Experiencia>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: ExperienciaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  //@HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getExperiencias();
  }

  getExperiencias() {
    let resp = this.valladolidService.getExperiencias();
    resp.subscribe(report=>this.dataSource.data=report as Experiencia[])
  }

  deleteExperiencias(id_trabajador: string) {
    this.valladolidService.deleteExperiencias(id_trabajador).subscribe(
      res => {
        console.log(res)
        this.getExperiencias();
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
