import { Server } from "hapi";

import { mount as mountPlugins } from "./plugins";

(async function start() {
  const server = new Server({
    port: 8080,
  });

  await mountPlugins(server);

  await server.start();
})();
