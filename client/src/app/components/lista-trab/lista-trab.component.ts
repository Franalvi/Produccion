import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TrabajadoresService } from '../../services/trabajadores.service'

@Component({
  selector: 'app-lista-trab',
  templateUrl: './lista-trab.component.html',
  styleUrls: ['./lista-trab.component.css']
})
export class ListaTrabComponent implements OnInit {

  trabajadores: any = [];
  displayedColumns: string[] = ['nombre', 'encargado', 'id_alfabetico', 'editar', 'borrar'];

  dataSource = new MatTableDataSource(this.trabajadores);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue);
  }

  constructor(private valladolidService: TrabajadoresService) { }

  @HostBinding('class') classes = 'row';

  ngOnInit(): void {
    this.getTrabajadores();
  }

  getTrabajadores() {
    this.valladolidService.getTrabajadores().subscribe(
      res => {
        this.trabajadores = res;
        console.log(this.trabajadores);
      },
      err => console.error(err)
    );
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
}
