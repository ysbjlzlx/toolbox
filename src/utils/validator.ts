import { isMatch } from 'date-fns';
import z from 'zod';

export const isUnixSecond = (num: string | number): boolean => {
  const schema = z.union([z.string().regex(/^[0-9]{10}$/), z.number().int().min(0)]);
  return schema.safeParse(num).success;
};

export const isMillisecond = (num: string | number): boolean => {
  const schema = z.union([z.string().regex(/^[0-9]{13}$/), z.number().int().min(0)]);
  return schema.safeParse(num).success;
};

export const isNumber = (num: string | number): boolean => {
  const schema = z.union([z.string().regex(/^[0-9]+$/), z.number().int().min(0)]);
  return schema.safeParse(num).success;
};

export const isDateStr = (str: string, format: string): boolean => {
  return isMatch(str, format);
};
