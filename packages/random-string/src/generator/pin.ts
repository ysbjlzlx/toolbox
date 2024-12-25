import { customAlphabet } from "nanoid";
import { numbers } from "nanoid-dictionary";

export const generator = (length?: number) => {
  return customAlphabet(numbers, 6)(length);
};
