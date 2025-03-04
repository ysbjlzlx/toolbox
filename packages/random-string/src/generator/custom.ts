import { difference, sampleSize, shuffle, uniq } from "lodash-es";
import { customAlphabet } from "nanoid";
import { z } from "zod";
import type { CustomOptions } from "../index.ts";

// biome-ignore format: lineWidth
export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// biome-ignore format: lineWidth
export const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// biome-ignore format: lineWidth
export const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// biome-ignore format: lineWidth
export const specialCharacters = ["~", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "="];
// biome-ignore format: lineWidth
export const lookLikes = ["0", "1", "2", "5", "l", "o", "s", "u", "v", "I", "O", "S", "Z"];

const clearCharacters = (chars: string[], noLookLikes = false, exclude = ""): string => {
  let result = chars;
  if (noLookLikes) {
    result = difference(result, lookLikes);
  }
  if (exclude) {
    result = difference(result, exclude.split(""));
  }
  return result.join("");
};
export const generator = (length: number, custom: CustomOptions): string => {
  const result = [];
  const characters = [];
  // 数字
  if (custom.numbers) {
    const chars = clearCharacters(numbers, custom.noLookLikes, custom.exclude);
    if (custom.containsAllTypes) {
      result.push(customAlphabet(chars, 1)(1));
    }
    characters.push(chars);
  }
  // 小写字母
  if (custom.lowercase) {
    const chars = clearCharacters(lowercase, custom.noLookLikes, custom.exclude);
    if (custom.containsAllTypes) {
      result.push(customAlphabet(chars, 1)(1));
    }
    characters.push(chars);
  }
  // 大写字母
  if (custom.uppercase) {
    const chars = clearCharacters(uppercase, custom.noLookLikes, custom.exclude);
    if (custom.containsAllTypes) {
      result.push(customAlphabet(chars, 1)(1));
    }
    characters.push(chars);
  }
  // 特殊字符
  if (custom.specialCharacters) {
    const chars = clearCharacters(specialCharacters, custom.noLookLikes, custom.exclude);
    if (custom.containsAllTypes) {
      result.push(customAlphabet(chars, 1)(1));
    }
    characters.push(chars);
  }
  // 自定义字符
  if (custom.include) {
    if (custom.containsAllTypes) {
      result.push(customAlphabet(custom.include, 1)(1));
    }
    characters.push(custom.include.split(""));
  }
  const remainLength = length - result.length;

  if (remainLength <= 0) {
    return sampleSize(shuffle(result), length).join("");
  }

  // 至少有一个字符
  z.string().min(1).parse(characters.join(""));

  result.push(customAlphabet(uniq(characters.join("").split("")).join(""), 12)(remainLength));

  return shuffle(result.join("").split("")).join("");
};
