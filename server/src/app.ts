import express, {Application} from 'express';
import morgan from 'morgan';
import cors from "cors";

const app:Application = express();

//Config 
app.set('port', 3000);

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// Routes
import indexRoutes from './routes/indexRoutes';
import encargadosRoutes from './routes/encargadosRoutes';
import trabajadoresRoutes from './routes/trabajadoresRoutes';
import grupoPuestosRoutes from './routes/grupoPuestosRoutes';
import puestosRoutes from './routes/puestosRoutes';
import experienciaRoutes from './routes/experienciaRoutes';
import registrosRoutes from './routes/registrosRoutes';
import incidenciasRoutes from './routes/incidenciasRoutes';
import indiceIncidenciasRoutes from './routes/indiceIncidenciasRoutes';
import planificacionRoutes from './routes/planificacionRoutes';
import psetRoutes from './routes/psetRoutes';
import controllerRoutes from './routes/controllerRoutes';
import resultRoutes from './routes/resultRoutes';

app.use('/', indexRoutes)
app.use('/api/encargados', encargadosRoutes)
app.use('/api/trabajadores', trabajadoresRoutes)
app.use('/api/grupoPuestos', grupoPuestosRoutes)
app.use('/api/puestos', puestosRoutes);
app.use('/api/experiencia', experienciaRoutes);
app.use('/api/registros', registrosRoutes)
app.use('/api/incidencias', incidenciasRoutes)
app.use('/api/indiceincidencias', indiceIncidenciasRoutes)
app.use('/api/planificacion', planificacionRoutes)
app.use('/api/pset',psetRoutes)
app.use('/api/controller',controllerRoutes)
app.use('/api/result',resultRoutes)

export default app;