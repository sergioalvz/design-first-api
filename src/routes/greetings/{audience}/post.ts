import { ServerRoute } from "hapi";
import { string } from "joi";

import { greetingRequest, greetingResponse } from "../../../schemas/greeting";

export function route(): ServerRoute {
  return {
    method: "POST",
    options: {
      description: "Dummy endpoint to say hi",
      handler() {
        return { greeting: "Hey!", lang: "en" };
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
          200: greetingResponse().required(),
        },
      },
      tags: ["api"],
      validate: {
        params: {
          audience: string()
            .description("Audience you would like to say hi")
            .required(),
        },
        payload: greetingRequest().required(),
      },
    },
    path: "/greetings/{audience}",
  };
}
