import { fizzbuzz, getValue } from "../src/fizzbuzz";
import fc from "fast-check"

describe("fizzbuzz test", () => {
  it("should return 1 when get 1", () => {
    expect(fizzbuzz(1)).toBe("1");
  })

  it("should return 1 2 when get 2", () => {
    expect(fizzbuzz(2)).toBe("1 2")
  })

  it("should return 1 2 Fizz when get 3", () => {
    expect(fizzbuzz(3)).toBe("1 2 Fizz")
  })

  it("should return 1 2 Fizz Bang when get 4", () => {
    expect(fizzbuzz(4)).toBe("1 2 Fizz Bang")
  })

  it("should return 1 2 Fizz 4 Buzz when get 5", () => {
    expect(fizzbuzz(5)).toBe("1 2 Fizz Bang Buzz")
  })

  it("should return 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz when 15", () => {
    expect(fizzbuzz(15)).toBe("1 2 Fizz Bang Buzz Fizz 7 Bang Fizz Buzz 11 FizzBang 13 14 FizzBuzz")
  })

  it("should return 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz Bang 17 Fizz 19 BangBuzz when 20", () => {
    expect(fizzbuzz(20)).toBe("1 2 Fizz Bang Buzz Fizz 7 Bang Fizz Buzz 11 FizzBang 13 14 FizzBuzz Bang 17 Fizz 19 BangBuzz")
  })

  it("should get FizzBangBuzz when get 60", () => {
    expect(getValue(60)).toBe("FizzBangBuzz")
  })

  xit("should always return the number when the number is !% 3 !% 5", () => {
    fc.assert(fc.property(fc.integer({ min: 1}).filter((i) => i % 3 !== 0 && i % 5 !== 0), (value: number) => {
      expect(getValue(value)).toBe(value.toString())
    }))
  })

  xit("should always contain Fizz and Buzz when range > 5", () => {
    fc.assert(fc.property(fc.integer({min: 5, max: 1000}), (maxRange: number) => {
      expect(fizzbuzz(maxRange)).toContain("Fizz");
      expect(fizzbuzz(maxRange)).toContain("Buzz");
    }))
  })
})