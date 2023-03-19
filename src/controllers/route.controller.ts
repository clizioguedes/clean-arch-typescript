import { Request, Response } from "express";
import { RouteInMemoryRepository } from "../infra/db/Route/route-in-memory.repository";
import { CreateRouteUseCase } from "../useCases/Route/create-route.use-case";
import { ListAllRoutesUseCase } from "../useCases/Route/list-all-routes.use-case";

export class RouteController {
  async create() {
    const routeRepo = new RouteInMemoryRepository();

    async (_request: Request, response: Response) => {
      const findlAllUseCase = new ListAllRoutesUseCase(routeRepo);

      const output = await findlAllUseCase.execute();

      return response.json(output);
    };
  }

  async findAll() {
    const routeRepo = new RouteInMemoryRepository();

    async (request: Request, response: Response) => {
      const createUseCase = new CreateRouteUseCase(routeRepo);

      const output = await createUseCase.execute(request.body);

      return response.status(201).json(output);
    };
  }
}
