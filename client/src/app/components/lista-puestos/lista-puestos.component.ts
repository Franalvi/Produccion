import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PuestosService } from '../../services/puestos.service'

@Component({
  selector: 'app-lista-puestos',
  templateUrl: './lista-puestos.component.html',
  styleUrls: ['./lista-puestos.component.css']
})
export class ListaPuestosComponent implements OnInit {

  puestos: any = [];
  displayedColumns: string[] = ['nombre', 'tiempo', 'grupo', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.puestos);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private valladolidService: PuestosService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getPuestos();
  }

  getPuestos() {
    this.valladolidService.getPuestos().subscribe(
      res => {
        this.puestos = res;
        console.log(this.puestos);
      },
      err => console.error(err)
    );
  }

  deletePuesto(id_puesto: string) {
    this.valladolidService.deletePuesto(id_puesto).subscribe(
      res => {
        console.log(res)
        this.getPuestos();
      },
      err => console.log(err)
    )
  }
}
