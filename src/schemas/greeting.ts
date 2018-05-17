import { object, string } from "joi";

export function greetingRequest() {
  return object({
    lang: string()
      .description("Language to greet")
      .valid(["es", "en"])
      .required(),
  }).label("GreetingRequest");
}

export function greetingResponse() {
  return greetingRequest()
    .keys({
      greeting: string()
        .description("A greeting")
        .example("Hi people from Asturias!"),
    })
    .label("GreetingResponse");
}
