import { describe, expect, test } from "vitest";
import { type GeneratePasswordOptions, generatePassword } from "../../../src/lib/random-string-utils.ts";

describe("生成随机字符串",async ()=>{
  test("小写字母",async ()=>{
    const opts:GeneratePasswordOptions ={
      length:10,
      lowercase:true,
      uppercase:false,
      numbers:false
    };
    const password = generatePassword(opts);
    console.log(password);
    expect(password).toHaveLength(10);
    expect(password).toMatch(/^[a-z]+$/);
  })
})
