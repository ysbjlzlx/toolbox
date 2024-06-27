import { base16, base32, base58, base64 } from "@scure/base";
import basex from "base-x";

export type BaseType = "base-16" | "base-32" | "base-36" | "base-58" | "base-64";

const alphabets = {
  "base-36": "0123456789abcdefghijklmnopqrstuvwxyz",
};

export const encode = (type: BaseType, input: string): string => {
  switch (type) {
    case "base-16":
      return base16.encode(new TextEncoder().encode(input));
    case "base-32":
      return base32.encode(new TextEncoder().encode(input));
    case "base-58":
      return base58.encode(new TextEncoder().encode(input));
    case "base-64":
      return base64.encode(new TextEncoder().encode(input));
  }

  const base = alphabets[type];
  return basex(base).encode(new TextEncoder().encode(input));
};

export const decode = (type: BaseType, input: string): string => {
  switch (type) {
    case "base-16":
      return new TextDecoder().decode(base16.decode(input));
    case "base-32":
      return new TextDecoder().decode(base32.decode(input));
    case "base-58":
      return new TextDecoder().decode(base58.decode(input));
    case "base-64":
      return new TextDecoder().decode(base64.decode(input));
  }
  const base = alphabets[type];
  return new TextDecoder().decode(basex(base).decode(input));
};
