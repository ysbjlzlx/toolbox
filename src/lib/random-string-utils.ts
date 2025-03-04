import { shuffle } from "lodash-es";
import { customAlphabet } from "nanoid";

const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%&*().";

// 0,1,2,5
const numbersNolookalikes = "346789";
// l,o,s,u,v
const lowercaseNolookalikes = "abcdefghijkmnpqrtwxyz";
// I,O,S,Z
const uppercaseNolookalikes = "ABCDEFGHJKLMNPQRTUVWXY";

interface GeneratePasswordOptions {
  length: number;
  numbers?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  symbols?: boolean;
  nolookalikes?: boolean;
  includeAllTypes?: boolean;
}
const defaultOptions: GeneratePasswordOptions = {
  length: 12,
  numbers: true,
  lowercase: true,
  uppercase: true,
  symbols: false,
  nolookalikes: true,
  includeAllTypes: true,
};
const generatePassword = (options?: GeneratePasswordOptions) => {
  const opts = { ...defaultOptions, ...options };
  const length = opts.length;

  const chars = [];
  if (opts.numbers) {
    chars.push(opts.nolookalikes ? numbersNolookalikes : numbers);
  }
  if (opts.lowercase) {
    chars.push(opts.nolookalikes ? lowercaseNolookalikes : lowercase);
  }
  if (opts.uppercase) {
    chars.push(opts.nolookalikes ? uppercaseNolookalikes : uppercase);
  }
  if (opts.symbols) {
    chars.push(symbols);
  }

  let result = "";
  if (opts.includeAllTypes) {
    const required = [];
    for (const item of chars) {
      required.push(customAlphabet(item)(1));
    }
    // 避免超长
    result += shuffle(required).slice(0, length).join("");
  }
  if (result.length < length) {
    result += customAlphabet(chars.join(""))(length - result.length);
  }

  return result;
};

export { type GeneratePasswordOptions, generatePassword };
