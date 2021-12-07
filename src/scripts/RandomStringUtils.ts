import {random as randomInt} from './Random';
import _ from 'lodash';

// prettier-ignore
export const NUMERIC_CHARS:string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// prettier-ignore
export const LOWERCASE_CHARS:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// prettier-ignore
export const UPPERCASE_CHARS:string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// prettier-ignore
export const SYMBOL_CHARS:string[] = ["!", "@", "#", "$", "%", "^", "&", "*"];

const EMPTY_CHAR = '';

const random = function (length: number): string {
  return generator(length, true, true, true, false);
};

const generator = function (
  length: number,
  numeric: boolean = true,
  lowercase: boolean = true,
  uppercase: boolean = true,
  symbol: boolean = false
): string {
  if (typeof length == 'undefined' || length == null || length <= 0) {
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
  if (symbol) {
    chars = chars.concat(SYMBOL_CHARS);
  }
  if (chars.length < 1) {
    return EMPTY_CHAR;
  } else {
    _.shuffle(chars);
  }
  let str: string = '';
  for (let i = 0; i < length; i++) {
    str += chars[randomInt(0, chars.length)];
  }
  return str;
};

export {random};
