import { Server } from "hapi";

import { route as PostToGreetings } from "./greetings/post";

export function mount(server: Server) {
  server.route(PostToGreetings());
}
