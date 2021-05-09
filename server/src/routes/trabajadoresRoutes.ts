import {Router} from 'express';

import trabajadoresController from '../controllers/trabajadoresController';

class TrabajadoresController {

    public router: Router = Router ();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', trabajadoresController.list);
        this.router.get('/:id', trabajadoresController.getOne);
        this.router.get('/turno/:id', trabajadoresController.turno);
        this.router.post('/', trabajadoresController.create);
        this.router.put('/:id', trabajadoresController.update);
        this.router.delete('/:id', trabajadoresController.delete);
    }
} 

const trabajadoresRoutes = new TrabajadoresController();
export default trabajadoresRoutes.router;