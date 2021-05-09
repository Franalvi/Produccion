import {Router} from 'express';

import incidenciasController from '../controllers/incidenciasController';

class IncidenciasRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', incidenciasController.list);
        this.router.get('/:id', incidenciasController.getOne);
        this.router.get('/fecha/:id', incidenciasController.Fecha);
        this.router.get('/trabajador/:id', incidenciasController.Trab);
        this.router.get('/puesto/:id', incidenciasController.Puesto);
        this.router.get('/indice/:id', incidenciasController.Indice);
        this.router.post('/', incidenciasController.create);
        this.router.put('/:id', incidenciasController.update);
        this.router.delete('/:id', incidenciasController.delete);
        this.router.delete('/fecha/:id', incidenciasController.deleteFecha);
    }
} 

const incidenciasRoutes = new IncidenciasRoutes();
export default incidenciasRoutes.router;