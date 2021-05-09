import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Experiencia} from '../models/valladolid';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  
  getExperiencias(){
    return this.http.get(`${this.API_URI}/experiencia`);
  }

  getExperiencia(id: string){
    return this.http.get(`${this.API_URI}/experiencia/id/${id}`);
  }

  expTrab(id: string){
    return this.http.get(`${this.API_URI}/experiencia/trab/${id}`);
  }
  expPuesto(id: string){
    return this.http.get(`${this.API_URI}/experiencia/puesto/${id}`);
  }
  expDisponible(id: string){
    return this.http.get(`${this.API_URI}/experiencia/disponible/${id}`);
  }

  deleteExperiencias(id: string){
    return this.http.delete(`${this.API_URI}/experiencia/id/${id}`);
  }

  deleteExpTrab(id: string){
    return this.http.delete(`${this.API_URI}/experiencia/trab/${id}`);
  }
  deleteExpPuesto(id: string){
    return this.http.delete(`${this.API_URI}/experiencia/puesto/${id}`);
  }

  saveExperiencias(experiencia: Experiencia){
    return this.http.post(`${this.API_URI}/experiencia`, experiencia);
  }

  updateExperiencias(id: string|number, updatedExperiencia: Experiencia): Observable<Experiencia> {
    return this.http.put(`${this.API_URI}/experiencia/${id}`, updatedExperiencia);
  }

}
