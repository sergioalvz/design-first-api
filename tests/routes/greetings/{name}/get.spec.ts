import { createServer } from "../../../../src/server";

describe("GET /greetings/{name}", () => {
  it("returns a 200 HTTP code if everything goes fine", async () => {
    const server = await createServer();

    const response = await server.inject({
      method: "GET",
      url: "/greetings/asturiashacking",
    });

    expect(response.statusCode).toBe(200);
  });
});
