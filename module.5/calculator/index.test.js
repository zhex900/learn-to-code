import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./index";

const testCases = [
  [1, 2],
  [3, 4],
  [4, 5],
  [5, 5],
];

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

  for (const [a, b] of testCases) {
    it(`adds ${a} + ${b} numbers from query params`, async () => {
      const res = await request(app).get("/add").query({ a, b });
      expect(res.status).toBe(200);
      expect(res.text).toBe(
        JSON.stringify({
          result: a + b,
        })
      );
    });
  }
});
