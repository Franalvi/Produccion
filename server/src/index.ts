import 'reflect-metadata';
import app from './app';
import { createConnection } from 'typeorm';

createConnection();
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})



//Web sockets
import SocketIO from 'socket.io';
import { getController } from './Events/Controller.events';
// import { getResult } from './Events/Result.event';
import { getPset } from './Events/Pset.events';


const io = SocketIO(server);
io.on('connection', async(socket) => {
    console.log('Se ha conectado al socket')
    //Controller
    //getController(io)

    //Results

    
    //pset
    getPset(io)
})
