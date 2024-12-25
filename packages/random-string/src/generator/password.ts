import { customAlphabet } from "nanoid";
import { lowercase, numbers, uppercase } from "nanoid-dictionary";

export const generator = (length?: number) => {
  return customAlphabet(numbers + lowercase + uppercase, 12)(length);
};
