import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { RegistrosService } from '../../services/registros.service'

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {

  registros: any = [];
  displayedColumns: string[] = ['fecha', 'id_trabajador', 'id_puesto', 'cantidad_total', 'cantidad_realizada', 'tiempo_total', 'tiempo_empleado', 'tiempo_disponible', 'tiempo_perdido', 'produccion', 'productividad', 'ritmo','tiempo_restante', 'cambio_turno', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.registros);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: RegistrosService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros() {
    this.valladolidService.getRegistros().subscribe(
      res => {
        this.registros = res;
        console.log(this.registros);
      },
      err => console.error(err)
    );
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
}
