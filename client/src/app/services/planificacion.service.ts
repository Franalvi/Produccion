import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Planificacion} from '../models/valladolid';

@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPlanificacion(){
    return this.http.get(`${this.API_URI}/planificacion`);
  }

  getPlan(id: string){
    return this.http.get(`${this.API_URI}/planificacion/${id}`);
  }
  planFecha(id: string){
    return this.http.get(`${this.API_URI}/planificacion/fecha/${id}`);
  }
  planTrab(id: string){
    return this.http.get(`${this.API_URI}/planificacion/trabajador/${id}`);
  }
  planPuesto(id: string){
    return this.http.get(`${this.API_URI}/planificacion/puesto/${id}`);
  }


  deletePlanificacion(id: string){
    return this.http.delete(`${this.API_URI}/planificacion/${id}`);
  }
  deletePlanFecha(id: string){
    return this.http.delete(`${this.API_URI}/planificacion/fecha/${id}`);
  }

  savePlanificacion(planificacion: Planificacion){
    return this.http.post(`${this.API_URI}/planificacion`, planificacion);
  }

  updatePlanificacion(id: string|number, updatedPlanificacion: Planificacion): Observable<Planificacion> {
    return this.http.put(`${this.API_URI}/planificacion/${id}`, updatedPlanificacion);
  }

}
