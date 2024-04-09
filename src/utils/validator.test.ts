import { isMillisecond, isUnixSecond } from '@/utils/validator.ts';
import { describe, expect, it } from 'vitest';

describe('isUnixSecond', () => {
  it('normal number', () => {
    const result = isUnixSecond(9);
    expect(result).toEqual(true);
  });
  it('负数', () => {
    const result = isUnixSecond(-9);
    expect(result).toEqual(false);
  });
});

describe('isMillisecond', () => {
  it('normal number', () => {
    const result = isMillisecond(new Date().getTime());
    expect(result).toEqual(true);
  });
});
