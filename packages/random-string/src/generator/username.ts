import { customAlphabet } from "nanoid";
import { lowercase, numbers } from "nanoid-dictionary";

export const generator = (length?: number) => {
  const size = length && length >= 1 ? length : 7;

  const first = customAlphabet(lowercase, 1)(1);
  const second = customAlphabet(numbers + lowercase, 7)(size - 1);

  return first + second;
};
