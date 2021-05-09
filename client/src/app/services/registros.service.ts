import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Registros} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getRegistros(){
    return this.http.get(`${this.API_URI}/registros`);
  }

  getRegistro(id: string){
    return this.http.get(`${this.API_URI}/registros/registro/${id}`);
  }

  regFecha(id: string){
    return this.http.get(`${this.API_URI}/registros/fecha/${id}`);
  }
  regTrab(id: string){
    return this.http.get(`${this.API_URI}/registros/trabajador/${id}`);
  }
  regPuesto(id: string){
    return this.http.get(`${this.API_URI}/registros/puesto/${id}`);
  }

  deleteRegistros(id: string){
    return this.http.delete(`${this.API_URI}/registros/${id}`);
  }
  deleteRegFecha(id: string){
    return this.http.delete(`${this.API_URI}/registros/fecha/${id}`);
  }

  saveRegistros(registro: Registros){
    return this.http.post(`${this.API_URI}/registros`, registro);
  }

  updateRegistros(id: string|number, updatedRegistro: Registros): Observable<Registros> {
    return this.http.put(`${this.API_URI}/registros/${id}`, updatedRegistro);
  }
}
