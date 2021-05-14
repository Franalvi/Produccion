import { Router } from "express";

const router: Router = Router();

import { getPset } from "../controllers/psetController";

router.route('/')
    .get(getPset) 

export default router;