import { Server } from "hapi";

import { openapi } from "./openapi";

export async function mount(server: Server) {
  await server.register(openapi());
}
