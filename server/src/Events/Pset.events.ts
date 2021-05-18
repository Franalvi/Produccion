import { Socket } from "socket.io";
import { getConnection, getRepository } from "typeorm";
import { PSET } from "../models/Pset";


/* export function insertPset(socket:Socket, io:any){
    socket.on('insert:PSET', async(data:PSET) => {
        console.log('DATA')
        console.log(data)
        await PSET.insert(data);
        await getPset(io)
    })
} */


export async function getPset(io:any){
    try {
            io.sockets.emit('PSET', 'PSET')

    } catch (error) {
        console.log(error)
    }
    // const pset = await getRepository('PSET').find()
    
}