import { Server } from "hapi";

import { mount as mountPlugins } from "./plugins";
import { mount as mountRoutes } from "./routes";

export async function createServer() {
  const server = new Server({
    port: 8080,
  });

  await mountPlugins(server);
  await mountRoutes(server);

  return server;
}
