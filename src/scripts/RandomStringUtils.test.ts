import { expect, test } from "vitest";
import { random, randomAlphabetic, randomNumber } from "./RandomStringUtils";

test("RandomStringUtils random", () => {
  const length = 16;
  const str = random(length);
  console.log(str);
  expect(str.length).toBe(length);
});

test("RandomStringUtils randomAlphabetic", () => {
  const length = 16;
  const str = randomAlphabetic(length);
  console.log(str);
  expect(str.length).toBe(length);
});

test("RandomStringUtils randomNumber", () => {
  const length = 6;
  const str = randomNumber(length);
  console.log(str);
  expect(str.length).toBe(length);
});
