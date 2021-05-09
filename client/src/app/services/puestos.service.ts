import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Puestos} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  
  getPuestos(){
    return this.http.get(`${this.API_URI}/puestos`);
  }

  getPuesto(id: string){
    return this.http.get(`${this.API_URI}/puestos/${id}`);
  }

  puestoGrupo(id: string){
    return this.http.get(`${this.API_URI}/puestos/grupo/${id}`);
  }

  deletePuesto(id: string){
    return this.http.delete(`${this.API_URI}/puestos/${id}`);
  }

  savePuesto(puesto: Puestos){
    return this.http.post(`${this.API_URI}/puestos`, puesto);
  }

  updatePuesto(id: string|number, updatedPuesto: Puestos): Observable<Puestos> {
    return this.http.put(`${this.API_URI}/puestos/${id}`, updatedPuesto);
  }
}
