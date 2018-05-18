import { ServerRoute } from "hapi";

import { greeting } from "../../schemas/greeting";

export function route(): ServerRoute {
  return {
    method: "POST",
    options: {
      description: "Dummy endpoint to say hi",
      handler() {
        return { greeting: "Hey audience!", lang: "en" };
      },
      plugins: {
        "hapi-swagger": {
          responses: {
            "400": { description: "Bad Request" },
          },
        },
      },
      response: {
        status: {
          200: greeting().required(),
        },
      },
      tags: ["api"],
      validate: {
        payload: greeting().required(),
      },
    },
    path: "/greetings",
  };
}
