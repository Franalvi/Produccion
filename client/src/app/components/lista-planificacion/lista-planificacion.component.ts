import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Planificacion } from 'src/app/models/valladolid';
import { PlanificacionService } from '../../services/planificacion.service'
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import * as XLSX from 'xlsx';


const EXCEL_EXTENSION = '.xlsx'

@Component({
  selector: 'app-lista-planificacion',
  templateUrl: './lista-planificacion.component.html',
  styleUrls: ['./lista-planificacion.component.css']
})
export class ListaPlanificacionComponent implements OnInit {

  ELEMENT_DATA: Planificacion[] = [];
  displayedColumns: string[] = ['fecha', 'trabajador', 'puesto', 'numero', 'editar', 'borrar']
  dataSource = new MatTableDataSource<Planificacion>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private valladolidService: PlanificacionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPlanificacion();
  }

  getPlanificacion() {
    let resp = this.valladolidService.getPlanificacion();
    resp.subscribe(report=>this.dataSource.data=report as Planificacion[])
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
  exportar() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.filteredData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    var today = new Date();
    var date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '_';
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var name = date + time + EXCEL_EXTENSION;
    XLSX.writeFile(workbook, name, { bookType: 'xlsx', type: 'buffer' });
  }
}
