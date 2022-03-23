import { sum } from "../src/sample";
import fc from "fast-check";

describe("sum of two numbers", () => {
  it("should return 42 when summing 40 and 2", () =>
    expect(sum(40, 2)).toBe(42));

  it("should return a greater number than the first one passing a positive integer as second value", () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer({ min: 1 }), (a, b) => {
        expect(sum(a, b)).toBeGreaterThan(a);
      })
    );
  });
});
