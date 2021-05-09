import {Router} from 'express';

import planificacionController from '../controllers/planificacionController';

class PlanificacionRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', planificacionController.list);
        this.router.get('/:id', planificacionController.getOne);
        this.router.get('/fecha/:id', planificacionController.Fecha);
        this.router.get('/trabajador/:id', planificacionController.Trab);
        this.router.get('/puesto/:id', planificacionController.puesto);
        this.router.post('/', planificacionController.create);
        this.router.put('/:id', planificacionController.update);
        this.router.delete('/:id', planificacionController.delete);
        this.router.delete('/fecha/:id', planificacionController.deleteFecha);
    }
} 

const planificacionRoutes = new PlanificacionRoutes();
export default planificacionRoutes.router;