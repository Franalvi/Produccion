import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pset } from "../models/pset";
import { io } from 'socket.io-client';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PsetService {

  socket:any;

  url:string = 'ws://localhost:3000'

  API_URI:string = 'http://localhost:3000/api/pset'

  constructor(private http:HttpClient) { this.socket = io(this.url) }

  getPsetPorSocket():Observable<any>{
    console.log('GetPsetPorSocket')
    return new Observable((s) => {
      this.socket.on('PSET', (data) => {
        s.next(data)
      })
    })
  }
  emit(event:string, data:any){
    console.log('Emit')
    this.socket.emit(event, data)
  }

  getPset():Observable<any>{
    console.log('GetPset')
    return this.http.get<any[]>(`${this.API_URI}`)
  }


}

