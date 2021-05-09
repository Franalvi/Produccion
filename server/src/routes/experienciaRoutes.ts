import {Router} from 'express';

import experienciaController from '../controllers/experienciaController';

class ExperienciaRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', experienciaController.list);
        this.router.get('/id/:id', experienciaController.getOne);
        this.router.get('/trab/:id', experienciaController.expTrab);
        this.router.get('/puesto/:id', experienciaController.expPuesto);
        this.router.get('/disponible/:id', experienciaController.disponible);
        this.router.post('/', experienciaController.create);
        this.router.put('/:id', experienciaController.update);
        this.router.delete('/id/:id', experienciaController.delete);
        this.router.delete('/trab/:id', experienciaController.deleteTrab);
        this.router.delete('/puesto/:id', experienciaController.deletePuesto);
    }
} 

const experienciaRoutes = new ExperienciaRoutes();
export default experienciaRoutes.router;