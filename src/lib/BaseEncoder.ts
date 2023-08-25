import basex from 'base-x';
// @ts-ignore
import ascii85 from 'ascii85';
import bs58 from 'bs58';
import bs58check from 'bs58check';

export type BaseType =
  | 'base-16'
  | 'base-32'
  | 'z-base-32'
  | 'base-36'
  | 'base-58'
  | 'base-58-check'
  | 'base-64'
  | 'base-85';

const alphabets = {
  'base-16': '0123456789abcdef',
  'base-32': '0123456789ABCDEFGHJKMNPQRSTVWXYZ',
  'z-base-32': 'ybndrfg8ejkmcpqxot1uwisza345h769',
  'base-36': '0123456789abcdefghijklmnopqrstuvwxyz',
  'base-58': '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  'base-64': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
};

export const encode = (type: BaseType, input: string): string => {
  if ('base-58' === type) {
    console.log(bs58.encode(new TextEncoder().encode(input)));
  }
  if ('base-58-check' === type) {
    return bs58check.encode(new TextEncoder().encode(input));
  }
  if ('base-85' === type) {
    return ascii85.encode(input).toString();
  }
  const base = alphabets[type];
  return basex(base).encode(new TextEncoder().encode(input));
};

export const decode = (type: BaseType, input: string): string => {
  if ('base-58' === type) {
    console.log(new TextDecoder().decode(bs58.decode(input)));
  }
  if ('base-58-check' === type) {
    console.log(Buffer.from(bs58check.decode(input)).toString('hex'));
    return new TextDecoder().decode(bs58check.decode(input));
  }
  if ('base-85' === type) {
    return ascii85.decode(Buffer.from(input)).toString();
  }
  const base = alphabets[type];
  return new TextDecoder().decode(basex(base).decode(input));
};
