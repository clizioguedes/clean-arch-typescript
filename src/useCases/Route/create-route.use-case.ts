import { LatLng, Route } from "../../domain/Route/route.entity";
import { RouteRepositoryInterface } from "../../domain/Route/route.repository";

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);

    await this.routeRepo.insert(route);

    return route.toJSON();
  }
}
