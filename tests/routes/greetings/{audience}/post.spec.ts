import { createServer } from "../../../../src/server";

describe("POST /greetings/{audience}", () => {
  it("returns a 200 HTTP code if everything goes fine", async () => {
    const server = await createServer();

    const response = await server.inject({
      method: "POST",
      payload: {
        lang: "es",
      },
      url: "/greetings/asturiashacking",
    });

    expect(response.statusCode).toBe(200);
  });

  it("returns a 400 HTTP code if there is a bad request", async () => {
    const server = await createServer();

    const response = await server.inject({
      method: "POST",
      payload: {
        lang: "fr",
      },
      url: "/greetings/asturiashacking",
    });

    expect(response.statusCode).toBe(400);
  });
});
