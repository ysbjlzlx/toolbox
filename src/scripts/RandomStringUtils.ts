import { customAlphabet } from "nanoid";

// prettier-ignore
export const NUMERIC_CHARS: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// prettier-ignore
export const LOWERCASE_CHARS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// prettier-ignore
export const UPPERCASE_CHARS: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// prettier-ignore
export const SYMBOL_CHARS: string[] = ["!", "@", "#", "$", "%", "^", "&", "*"];

const EMPTY_CHAR = "";

const random = (length: number): string => {
  const options: GeneratorOptions = {
    length: length,
    numeric: true,
    lowercase: true,
    uppercase: true,
    symbol: false,
  };
  return generator(options);
};

const randomAlphabetic = (length: number): string => {
  const options: GeneratorOptions = {
    length: length,
    numeric: false,
    lowercase: true,
    uppercase: true,
    symbol: false,
  };
  return generator(options);
};

const randomNumber = (length: number): string => {
  const options: GeneratorOptions = {
    length: length,
    numeric: true,
    lowercase: false,
    uppercase: false,
    symbol: false,
  };
  return generator(options);
};

export interface GeneratorOptions {
  length?: number;
  numeric?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  symbol?: boolean;
  symbolChars?: string;
}

const generator = ({
  length = 8,
  numeric = true,
  lowercase = true,
  uppercase = true,
  symbol = false,
  symbolChars = "!@#$%^&*",
}: GeneratorOptions): string => {
  if (typeof length === "undefined" || length === null || length <= 0) {
    return EMPTY_CHAR;
  }
  let chars: string[] = [];
  if (numeric) {
    chars = chars.concat(NUMERIC_CHARS);
  }
  if (lowercase) {
    chars = chars.concat(LOWERCASE_CHARS);
  }
  if (uppercase) {
    chars = chars.concat(UPPERCASE_CHARS);
  }
  if (symbol && symbolChars) {
    chars = chars.concat(symbolChars.split(""));
  }
  if (chars.length < 2) {
    return EMPTY_CHAR;
  }
  return customAlphabet(chars.join(""), length)();
};

export { generator, random, randomAlphabetic, randomNumber };
