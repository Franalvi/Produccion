import {Router} from 'express';

import puestosController from '../controllers/puestosController';

class PuestosRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', puestosController.list);
        this.router.get('/:id', puestosController.getOne);
        this.router.post('/', puestosController.create);
        this.router.put('/:id', puestosController.update);
        this.router.delete('/:id', puestosController.delete);
    }
} 

const puestosRoutes = new PuestosRoutes();
export default puestosRoutes.router;