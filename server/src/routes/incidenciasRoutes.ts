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
        this.router.post('/', incidenciasController.create);
        this.router.put('/:id', incidenciasController.update);
        this.router.delete('/:id', incidenciasController.delete);
    }
} 

const incidenciasRoutes = new IncidenciasRoutes();
export default incidenciasRoutes.router;