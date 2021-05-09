import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Incidencias} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getIncidencias(){
    return this.http.get(`${this.API_URI}/incidencias`);
  }

  getIncidencia(id: string){
    return this.http.get(`${this.API_URI}/incidencias/${id}`);
  }
  incFecha(id: string){
    return this.http.get(`${this.API_URI}/incidencias/fecha/${id}`);
  }
  incTrab(id: string){
    return this.http.get(`${this.API_URI}/incidencias/trabajador/${id}`);
  }
  incPuesto(id: string){
    return this.http.get(`${this.API_URI}/incidencias/puesto/${id}`);
  }
  incIndice(id: string){
    return this.http.get(`${this.API_URI}/incidencias/indice/${id}`);
  }
  deleteIncidencias(id: string){
    return this.http.delete(`${this.API_URI}/incidencias/${id}`);
  }
  deleteIncFecha(id: string){
    return this.http.delete(`${this.API_URI}/incidencias/fecha/${id}`);
  }

  saveIncidencias(incidencias: Incidencias){
    return this.http.post(`${this.API_URI}/incidencias`, incidencias);
  }

  updateIncidencias(id: string|number, updatedIncidencias: Incidencias): Observable<Incidencias> {
    return this.http.put(`${this.API_URI}/incidencias/${id}`, updatedIncidencias
    );
  }
}
