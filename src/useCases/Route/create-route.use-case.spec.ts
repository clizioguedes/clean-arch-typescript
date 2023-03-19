import { RouteInMemoryRepository } from "../../infra/db/Route/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("CreateRouteUseCase Test", () => {
  test("should create a new route", async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);

    const output = await createUseCase.execute({
      title: "minha rota",
      startPosition: {
        lat: 15,
        lng: 10,
      },
      endPosition: {
        lat: 15,
        lng: 10,
      },
    });

    expect(repository.items).toHaveLength(1);

    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: "minha rota",
      startPosition: {
        lat: 15,
        lng: 10,
      },
      endPosition: {
        lat: 15,
        lng: 10,
      },
      points: [],
    });
  });
});
