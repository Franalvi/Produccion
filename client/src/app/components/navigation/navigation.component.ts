import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'client';

  mode = new FormControl('side');
  panelOpenState = false;

  imagen: boolean = true;
  cambiar() {
    this.imagen = false
  }
}
