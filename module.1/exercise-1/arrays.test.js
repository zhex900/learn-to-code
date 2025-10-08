import { describe, it, expect } from "vitest";
import { union } from "./arrays.js";

describe.skip("union", () => {
  it("merges unique values preserving order", () => {
    expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
    expect(union(["a", "b"], ["b", "c", "a"])).toEqual(["a", "b", "c"]);
  });
  it("retains duplicates from first array, ignores duplicates from second", () => {
    expect(union([1, 1, 2], [2, 2, 3])).toEqual([1, 1, 2, 3]);
  });
  it("handles empty arrays", () => {
    expect(union([], [1, 2])).toEqual([1, 2]);
    expect(union([1, 2], [])).toEqual([1, 2]);
    expect(union([], [])).toEqual([]);
  });
});
