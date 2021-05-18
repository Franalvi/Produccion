import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Controller } from 'src/app/models/controller';
import { ControllerService } from '../../services/controller.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  ELEMENT_DATA: Controller[] = [];
  displayedColumns: string[] = ['CTRL_ID', 'CTRL_Name', 'CTRL_IPAddress', 'CTRL_Type', 'CTRL_WorkingAreaId', 'CTRL_Version'];
  dataSource = new MatTableDataSource<Controller>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private controllerService: ControllerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getController();
    this.controllerService.getControllerPorSocket().subscribe(data => {
      this.getController()
    });
    setInterval(() => {this.getController() }, 2000);
  }

  response
  getController() {

    this.controllerService.getController().subscribe(
      res =>{
        this.dataSource.data = res as Controller[]
        console.log(this.dataSource.data)
        this.response = res
        console.log('Res')
        console.log(res)
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
