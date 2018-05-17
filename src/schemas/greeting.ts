import { object, string } from "joi";

export function greeting() {
  return object({
    greeting: string()
      .description("A greeting")
      .required(),
  }).label("Greeting");
}
