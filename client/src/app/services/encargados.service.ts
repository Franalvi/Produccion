import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Encargados} from '../models/valladolid';


@Injectable({
  providedIn: 'root'
})
export class EncargadosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEncargados(){
    return this.http.get(`${this.API_URI}/encargados`);
  }

  getEncargado(id: string){
    return this.http.get(`${this.API_URI}/encargados/${id}`);
  }

  deleteEncargado(id: string){
    return this.http.delete(`${this.API_URI}/encargados/${id}`);
  }

  saveEncargado(encargado: Encargados){
    return this.http.post(`${this.API_URI}/encargados`, encargado);
  }

  updateEncargado(id: string|number, updatedEncargado: Encargados): Observable<Encargados> {
    return this.http.put(`${this.API_URI}/encargados/${id}`, updatedEncargado);
  }

}
