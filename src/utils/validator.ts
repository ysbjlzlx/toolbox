import { isMatch } from 'date-fns';
import * as JOI from 'joi';
import z from 'zod';

export const isUnixSecond = (num: string | number): boolean => {
  const schema = z.union([z.string().regex(/^[0-9]{10}$/), z.number().int().min(0)]);
  const result = schema.safeParse(num);
  return result.success;
};

export const isMillisecond = (num: string | number): boolean => {
  const scheme = JOI.string()
    .pattern(/^[0-9]{13}$/)
    .required();
  try {
    JOI.assert(num, scheme);
    return true;
  } catch (e) {
    return false;
  }
};

export const isNumber = (num: string | number): boolean => {
  const scheme = JOI.string()
    .pattern(/^[0-9]+$/)
    .required();
  try {
    JOI.assert(num, scheme);
    return true;
  } catch (e) {
    return false;
  }
};

export const isDateStr = (str: string, format: string): boolean => {
  return isMatch(str, format);
};
