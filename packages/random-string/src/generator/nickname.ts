import { customAlphabet } from "nanoid";
import { numbers, uppercase } from "nanoid-dictionary";

export const generator = (length?: number) => {
  const size = length && length >= 1 ? length : 7;

  const first = customAlphabet(uppercase, 1)(1);
  const second = customAlphabet(numbers + uppercase, 7)(size - 1);

  return first + second;
};
