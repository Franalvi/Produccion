import {Router} from 'express';

import experienciaController from '../controllers/experienciaController';

class ExperienciaRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', experienciaController.list);
        this.router.get('/:id', experienciaController.expTrab);
        this.router.get('/:id', experienciaController.expPuesto);
        this.router.post('/', experienciaController.create);
        this.router.put('/:id', experienciaController.update);
        this.router.delete('/:id', experienciaController.deleteTrab);
        this.router.delete('/:id', experienciaController.deletePuesto);
    }
} 

const experienciaRoutes = new ExperienciaRoutes();
export default experienciaRoutes.router;