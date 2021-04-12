import {Router} from 'express';

import encargadosController from '../controllers/encargadosController';

class EncargadosRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', encargadosController.list);
        this.router.get('/:id', encargadosController.getOne);
        this.router.post('/', encargadosController.create);
        this.router.put('/:id', encargadosController.update);
        this.router.delete('/:id', encargadosController.delete);
    }
} 

const encargadosRoutes = new EncargadosRoutes();
export default encargadosRoutes.router;