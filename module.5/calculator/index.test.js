import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./index";

describe("GET /add", () => {
  it("adds two numbers from query params", async () => {
    const res = await request(app).get("/add").query({ a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe(
      JSON.stringify({
        result: 5,
      })
    );
  });
  it("adds a + b numbers from query params", async () => {
    const res = await request(app).get("/add").query({ a: 3, b: 3 });
    expect(res.status).toBe(200);
    expect(res.text).toBe(
      JSON.stringify({
        result: 6,
      })
    );
  });
});
