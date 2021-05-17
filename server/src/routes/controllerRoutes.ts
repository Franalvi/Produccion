import { Router } from "express";

const router: Router = Router();

import { getController } from "../controllers/controllerController";

router.route('/')
    .get(getController) 

export default router;