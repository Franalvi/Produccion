import {Router} from 'express';

import indiceIncidenciasController from '../controllers/encargadosController';

class IndiceIncidenciasRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', indiceIncidenciasController.list);
        this.router.get('/:id', indiceIncidenciasController.getOne);
        this.router.post('/', indiceIncidenciasController.create);
        this.router.put('/:id', indiceIncidenciasController.update);
        this.router.delete('/:id', indiceIncidenciasController.delete);
    }
} 

const indiceIncidenciasRoutes = new IndiceIncidenciasRoutes();
export default indiceIncidenciasRoutes.router;