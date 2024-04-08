import { isUnixSecond } from '@/utils/validator.ts';
import { describe, expect, it } from 'vitest';

describe('isUnixSecond', () => {
  it('normal number', () => {
    const result = isUnixSecond(9);
    expect(result).toEqual(true);
  });
});
