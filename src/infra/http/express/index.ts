import express, { Express, Request, Response } from "express";
import { RouteController } from "../../../controllers/route.controller";
import { CreateRouteUseCase } from "../../../useCases/Route/create-route.use-case";
import { RouteInMemoryRepository } from "../../db/Route/route-in-memory.repository";

import routes from "./routes";

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
