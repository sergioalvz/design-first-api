import { Request, ServerRoute } from "hapi";
import { string } from "joi";

import { greeting } from "../../../schemas/greeting";

export function route(): ServerRoute {
  return {
    method: "GET",
    options: {
      handler(req: Request) {
        return {
          greeting: req.params.name,
        };
      },
      response: {
        status: {
          200: greeting().required(),
        },
      },
      tags: ["api"],
      validate: {
        params: {
          name: string().required(),
        },
      },
    },
    path: "/greetings/{name}",
  };
}
