import { createServer } from "./server";

(async function start() {
  const server = await createServer();

  await server.start();
})();
