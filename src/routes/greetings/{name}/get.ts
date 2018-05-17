import { Request, ServerRoute } from "hapi";
import { string } from "joi";

import { greeting } from "../../../schemas/greeting";

export function route(): ServerRoute {
  return {
    method: "GET",
    options: {
      description: "Dummy endpoint to say hi",
      handler(req: Request) {
        return {
          greeting: `Hi ${req.params.name}!`,
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
          name: string()
            .description("Audience you would like to say hi")
            .required(),
        },
      },
    },
    path: "/greetings/{name}",
  };
}
