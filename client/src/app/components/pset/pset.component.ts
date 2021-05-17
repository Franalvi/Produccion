import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pset } from 'src/app/models/pset';
import { PsetService } from '../../services/pset.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pset',
  templateUrl: './pset.component.html',
  styleUrls: ['./pset.component.css']
})
export class PsetComponent implements OnInit {

  ELEMENT_DATA: Pset[] = [];
  displayedColumns: string[] = ['PS_ID', 'PS_Number', 'PS_TorqueUnit', 'PS_TighteningUnitId', 'PS_Comment', 'PS_Version'];
  dataSource = new MatTableDataSource<Pset>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private psetService: PsetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPset();
    this.psetService.getPsetPorSocket().subscribe(data => {
      this.getPset()
    });
    setInterval(() => {this.getPset() }, 2000);
  }

  response
  getPset() {

    this.psetService.getPset().subscribe(
      res =>{
        this.dataSource.data = res as Pset[]
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
