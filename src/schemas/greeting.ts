import { object, string } from "joi";

export function greeting() {
  return object({
    greeting: string().required(),
  }).label("Greeting");
}
