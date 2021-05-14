import 'reflect-metadata';
import app from './app';
import { createConnection } from 'typeorm';

createConnection();
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})



//Web sockets
import SocketIO from 'socket.io';
// import { getController, insertController } from './Events/Controller.events';
// import { insertResult, getResult } from './Events/Result.event';
import { getPset, insertPset } from './Events/Pset.events';


const io = SocketIO(server);
io.on('connection', async(socket) => {

   /*  //Controller
    insertController(socket, io)
    

    //Results
    insertResult(socket, io) */
    console.log('Se ha conectado al socket')
    //pset
    //insertPset(socket, io)
    getPset(io)
})
