import { Server } from "hapi";

import { route as sayHi } from "./greetings/{name}/get";

export function mount(server: Server) {
  server.route(sayHi());
}
