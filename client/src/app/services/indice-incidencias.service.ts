import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Indice_Incidencias} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class IndiceIncidenciasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getIndiceIncidencias(){
    return this.http.get(`${this.API_URI}/indiceincidencias`);
  }

  getIndiceIncidencia(id: string){
    return this.http.get(`${this.API_URI}/indiceincidencias/${id}`);
  }

  deleteIndiceIncidencias(id: string){
    return this.http.delete(`${this.API_URI}/indiceincidencias/${id}`);
  }

  saveIndiceIncidencias(IndiceIncidencias: Indice_Incidencias){
    return this.http.post(`${this.API_URI}/indiceincidencias`, IndiceIncidencias);
  }

  updateIndiceIncidencias(id: string|number, updatedIndiceIncidencias: Indice_Incidencias): Observable<Indice_Incidencias> {
    return this.http.put(`${this.API_URI}/indiceincidencias/${id}`, updatedIndiceIncidencias);
  }
}
