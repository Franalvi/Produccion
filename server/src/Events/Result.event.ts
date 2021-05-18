import { Socket } from "socket.io";
import { Result } from "../models/Result";

export function insertResult(socket:Socket, io:any){
    socket.on('insert:RESULT', async(data:Result) => {
        console.log('DATA')
        console.log(data)
        await Result.insert(data);
        await getResult(io)
    })
}


export async function getResult(io:any){
    io.socket.emit('RESULT', 'RESULT')
}