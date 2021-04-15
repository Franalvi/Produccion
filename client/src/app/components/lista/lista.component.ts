import { Component, OnInit } from '@angular/core';

import { ValladolidService } from '../../services/valladolid.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private valladolidService: ValladolidService) { }

  ngOnInit(): void {
    this.valladolidService.getEncargados().subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}
