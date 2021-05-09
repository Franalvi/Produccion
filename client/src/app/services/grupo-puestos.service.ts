import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Grupo_puestos} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class GrupoPuestosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGrupoPuestos(){
    return this.http.get(`${this.API_URI}/grupoPuestos`);
  }

  getGrupoPuesto(id: string){
    return this.http.get(`${this.API_URI}/grupoPuestos/${id}`);
  }

  deleteGrupoPuestos(id: string){
    return this.http.delete(`${this.API_URI}/grupoPuestos/${id}`);
  }

  saveGrupoPuestos(grupo_puesto: Grupo_puestos){
    return this.http.post(`${this.API_URI}/grupoPuestos`, grupo_puesto);
  }

  updateGrupoPuestos(id: string|number, updatedgrupo_puesto: Grupo_puestos): Observable<Grupo_puestos> {
    return this.http.put(`${this.API_URI}/grupoPuestos/${id}`, updatedgrupo_puesto);
  }
}
