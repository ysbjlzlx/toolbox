import { z } from "zod";
import { generator as customGenerator } from "./generator/custom.ts";
import { generator as nicknameGenerator } from "./generator/nickname.ts";
import { generator as passwordGenerator } from "./generator/password.ts";
import { generator as pinGenerator } from "./generator/pin.ts";
import { generator as usernameGenerator } from "./generator/username.ts";

const Types = z.enum(["pin", "nickname", "username", "password", "custom"]);
type Types = z.infer<typeof Types>;

export interface CustomOptions {
  numbers?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  specialCharacters?: boolean;
  include?: string;
  exclude?: string;
  noLookLikes?: boolean;
  containsAllTypes?: boolean;
}

export interface GenerateProps {
  type: Types;
  length?: number;
  custom?: CustomOptions;
}

export const generate = ({ type, length, custom }: GenerateProps): string => {
  let result = "";
  switch (type) {
    case "pin":
      result = pinGenerator(length);
      break;
    case "nickname":
      result = nicknameGenerator(length);
      break;
    case "username":
      result = usernameGenerator(length);
      break;
    case "password":
      result = passwordGenerator(length);
      break;
    case "custom":
      // biome-ignore format: <explanation>
      result = customGenerator(length || 12, custom || { numbers: true, lowercase: true, uppercase: true, specialCharacters: false, noLookLikes:true, containsAllTypes: true });
      break;
  }
  return result;
};
