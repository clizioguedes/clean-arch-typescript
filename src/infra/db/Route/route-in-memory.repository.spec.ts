import { Route, RouteProps } from "../../../domain/Route/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe("RouteInMemoryRepository Test", () => {
  test("should insert new route", async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: {
        lat: 15,
        lng: 20,
      },
      endPosition: {
        lat: 15,
        lng: 20,
      },
    };

    const route = new Route(routeProps);
    await repository.insert(route);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
