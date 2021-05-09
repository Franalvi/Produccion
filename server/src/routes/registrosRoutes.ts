import {Router} from 'express';

import registrosController from '../controllers/registrosController';

class RegistrosRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', registrosController.list);
        this.router.get('/registro/:id', registrosController.getOne);
        this.router.get('/fecha/:id', registrosController.Fecha);
        this.router.get('/trabajador/:id', registrosController.Trab);
        this.router.get('/puesto/:id', registrosController.Puesto);
        this.router.post('/', registrosController.create);
        this.router.put('/:id', registrosController.update);
        this.router.delete('/:id', registrosController.delete);
        this.router.delete('/fecha/:id', registrosController.deleteFecha);
    }
} 

const registrosRoutes = new RegistrosRoutes();
export default registrosRoutes.router;