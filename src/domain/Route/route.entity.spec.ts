import { LatLng, Route } from "./route.entity";

describe("Route", () => {
  test("constructor with points empty", () => {
    const routeProps = {
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

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
  });

  test("constructor with points not empty", () => {
    const routeProps = {
      title: "minha rota",
      startPosition: {
        lat: 15,
        lng: 20,
      },
      endPosition: {
        lat: 15,
        lng: 20,
      },
      points: [
        {
          lat: 20,
          lng: 30,
        },
        {
          lat: 40,
          lng: 50,
        },
      ],
    };

    const route = new Route(routeProps);

    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [
        {
          lat: 20,
          lng: 30,
        },
        {
          lat: 40,
          lng: 50,
        },
      ],
    });
  });

  test("update title method", () => {
    const routeProps = {
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
    route.updateTitle("title updated");

    expect(route.title).toBe("title updated");
  });

  test("updatePosition method", () => {
    const routeProps = {
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
    const startPosition: LatLng = {
      lat: 10,
      lng: 20,
    };
    const endPosition: LatLng = {
      lat: 30,
      lng: 40,
    };

    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);

    expect(route.endPosition).toBe(endPosition);
  });

  test("updatePoints method", () => {
    const routeProps = {
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

    const points = [
      {
        lat: 15,
        lng: 20,
      },
    ];

    route.updatePoints(points);

    expect(route.points).toHaveLength(1);

    expect(route.points).toStrictEqual(points);
  });
});
