import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Controller } from "../models/controller";
import { io } from 'socket.io-client';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  socket:any;

  url:string = 'ws://localhost:3000'

  API_URI:string = 'http://localhost:3000/api/controller'

  constructor(private http:HttpClient) { this.socket = io(this.url) }

  getControllerPorSocket():Observable<any>{
    console.log('GetControllerPorSocket')
    return new Observable((s) => {
      this.socket.on('CONTROLLER', (data) => {
        s.next(data)
      })
    })
  }
  emit(event:string, data:any){
    console.log('Emit')
    this.socket.emit(event, data)
  }

  getController():Observable<any>{
    console.log('GetController')
    return this.http.get<any[]>(`${this.API_URI}`)
  }


}
