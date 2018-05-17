import { Server } from "hapi";

import { route as PostToGreetings } from "./greetings/{audience}/post";

export function mount(server: Server) {
  server.route(PostToGreetings());
}
