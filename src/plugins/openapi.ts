import HapiSwagger from "hapi-swagger";
import HapiSwaggeredUI from "hapi-swaggered-ui";
import Inert from "inert";
import Vision from "vision";

export function openapi(): any[] {
  return [
    Inert,
    Vision,
    {
      options: {
        documentationPage: false,
        host: "http://localhost:8080",
        info: {
          title: "Design-first API",
          version: "1.0.0",
        },
        swaggerUI: false,
      },
      plugin: HapiSwagger,
    },
    {
      options: {
        auth: false,
        path: "/documentation",
        swaggerEndpoint: "/swagger.json",
        title: "Design-first API",
      },
      plugin: HapiSwaggeredUI,
    },
  ];
}
