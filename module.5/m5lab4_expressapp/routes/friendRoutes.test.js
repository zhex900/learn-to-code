import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../index";

describe("GET /friends", () => {
  it("Get all friends", async () => {
    const res = await request(app).get("/friends");
    expect(res.status).toBe(200);
  });
});
