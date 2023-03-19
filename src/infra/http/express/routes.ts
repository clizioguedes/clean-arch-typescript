import { Router } from "express";
import { RouteController } from "../../../controllers/route.controller";

const router = Router();

const routeController = new RouteController();

router.post("/routes", routeController.create);

router.get("/routes", routeController.findAll);

export default router;
