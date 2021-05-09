import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PlanificacionService } from '../../services/planificacion.service'

@Component({
  selector: 'app-lista-planificacion',
  templateUrl: './lista-planificacion.component.html',
  styleUrls: ['./lista-planificacion.component.css']
})
export class ListaPlanificacionComponent implements OnInit {

  planificacion: any = [];
  displayedColumns: string[] = ['fecha', 'trabajador', 'puesto', 'numero', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.planificacion);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: PlanificacionService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getPlanificacion();
  }

  getPlanificacion() {
    this.valladolidService.getPlanificacion().subscribe(
      res => {
        this.planificacion = res;
        console.log(this.planificacion);
      },
      err => console.error(err)
    );
  }

  deletePlanificacion(id_orden: string) {
    this.valladolidService.deletePlanificacion(id_orden).subscribe(
      res => {
        console.log(res)
        this.getPlanificacion();
      },
      err => console.log(err)
    )
  }
}
