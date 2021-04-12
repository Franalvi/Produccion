import {Router} from 'express';

import grupoPuestosController from '../controllers/grupoPuestosController';

class GrupoPuestosRoutes {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', grupoPuestosController.list);
        this.router.get('/:id', grupoPuestosController.getOne);
        this.router.post('/', grupoPuestosController.create);
        this.router.put('/:id', grupoPuestosController.update);
        this.router.delete('/:id', grupoPuestosController.delete);
    }
} 

const grupoPuestosRoutes = new GrupoPuestosRoutes();
export default grupoPuestosRoutes.router;