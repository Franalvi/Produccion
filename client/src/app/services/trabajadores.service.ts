import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Trabajadores} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrabajadores(): Observable<any>{
    return this.http.get(`${this.API_URI}/trabajadores`);
  }

  getTrabajador(id: string){
    return this.http.get(`${this.API_URI}/trabajadores/${id}`);
  }

  trabTurno(id: string){
    return this.http.get(`${this.API_URI}/trabajadores/turno/${id}`);
  }

  deleteTrabajador(id: string){
    return this.http.delete(`${this.API_URI}/trabajadores/${id}`);
  }

  saveTrabajador(trabajador: Trabajadores){
    return this.http.post(`${this.API_URI}/trabajadores`, trabajador);
  }

  updateTrabajador(id: string|number, updatedTrabajador: Trabajadores): Observable<Trabajadores> {
    return this.http.put(`${this.API_URI}/trabajadores/${id}`, updatedTrabajador);
  }
}
