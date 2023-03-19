import { Route } from "../../domain/Route/route.entity";

export interface RouteRepositoryInterface {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}
