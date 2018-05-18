import { object, string } from "joi";

export function greeting() {
  return object({
    audience: string()
      .description("Audience you would like to say hi")
      .example("AsturiasHacking"),
    greeting: string()
      .description("A greeting")
      .example("Hi people from Asturias!"),
    lang: string()
      .description("Language to greet")
      .valid(["es", "en"]),
  }).label("Greeting");
}
