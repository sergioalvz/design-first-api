import { Server } from "hapi";

(async function start() {
  const server = new Server({
    port: 8080,
  });

  await server.start();
})();
