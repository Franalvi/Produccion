import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ExperienciaService } from '../../services/experiencia.service'

@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css']
})
export class ListaExperienciaComponent implements OnInit {

  experiencias: any = [];
  displayedColumns: string[] = ['trabajador', 'puesto', 'disponible', 'experiencia', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.experiencias);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: ExperienciaService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias() {
    this.valladolidService.getExperiencias().subscribe(
      res => {
        this.experiencias = res;
        console.log(this.experiencias);
      },
      err => console.error(err)
    );
  }

  deleteExperiencias(id_experiencia: string) {
    this.valladolidService.deleteExperiencias(id_experiencia).subscribe(
      res => {
        console.log(res)
        this.getExperiencias();
      },
      err => console.log(err)
    )
  }
}
