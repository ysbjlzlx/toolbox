import { describe, expect, it } from "vitest";
import { isMillisecond, isUnixSecond } from "../../src/utils/validator.ts";

describe("isUnixSecond", () => {
  it("normal number", () => {
    const result = isUnixSecond(9);
    expect(result).toEqual(true);
  });
  it("负数", () => {
    const result = isUnixSecond(-9);
    expect(result).toEqual(false);
  });
});

describe("isMillisecond", () => {
  it("normal number", () => {
    const result = isMillisecond(Date.now());
    expect(result).toEqual(true);
  });
});
