import { Server } from "hapi";

import { mount as mountPlugins } from "./plugins";
import { mount as mountRoutes } from "./routes";

(async function start() {
  const server = new Server({
    port: 8080,
  });

  await mountPlugins(server);
  await mountRoutes(server);

  await server.start();
})();
