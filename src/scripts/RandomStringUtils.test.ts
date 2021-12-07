import {random} from './RandomStringUtils';

test('RandomStringUtils random', () => {
  const length = 16;
  const str = random(length);
  console.log(str);
  expect(str.length).toEqual(length);
});
