import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import encargadosRoutes from './routes/encargadosRoutes';
import trabajadoresRoutes from './routes/trabajadoresRoutes';
import grupoPuestosRoutes from './routes/grupoPuestosRoutes';
import puestosRoutes from './routes/puestosRoutes';
import experienciaRoutes from './routes/experienciaRoutes';
import registrosRoutes from './routes/registrosRoutes';
import incidenciasRoutes from './routes/incidenciasRoutes';
import indiceIncidenciasRoutes from './routes/IndiceIncidenciasRoutes';
import planificacionRoutes from './routes/planificacionRoutes';


class Server {

    public app: Application

    constructor () {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/encargados', encargadosRoutes);
        this.app.use('/api/trabajadores', trabajadoresRoutes);
        this.app.use('/api/grupoPuestos', grupoPuestosRoutes);
        this.app.use('/api/puestos', puestosRoutes);
        this.app.use('/api/experiencia', experienciaRoutes);
        this.app.use('/api/registros', registrosRoutes);
        this.app.use('/api/incidencias', incidenciasRoutes);
        this.app.use('/api/indiceincidencias', indiceIncidenciasRoutes);
        this.app.use('/api/planificacion', planificacionRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
