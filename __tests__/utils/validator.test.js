import { isUnixSecond } from '@/utils/validator.ts';
import { expect, test } from 'vitest';

test('isUnixSecond', () => {
  const result = isUnixSecond(9);
  expect(result).toEqual(true);
});
