import { Socket } from "socket.io";
import { Controller } from "../models/Controller";

export function insertController(socket:Socket, io:any){
    socket.on('insert:CONTROLLER', async(data:Controller) => {
        console.log('DATA')
        console.log(data)
        await Controller.insert(data);
        await getController(io)
    })
}


export async function getController(io:any){
    io.socket.emit('CONTROLLER', 'CONTROLLER')
}