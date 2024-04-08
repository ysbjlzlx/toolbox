import { isUnixSecond } from '@/utils/validator.ts';

describe('isUnixSecond', () => {
  it('isUnixSecond', () => {
    const result = isUnixSecond(9);
    expect(result).toEqual(true);
  });
});
