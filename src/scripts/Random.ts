/**
 * 生成整数随机数
 * 包含最小值，不含最大值的随机数
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @return {number}
 */
export function random(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 生成整数随机数
 * 同时包含最小值和最大值的随机数
 * @param min 最小值（包含）
 * @param max 最大值（包含）
 * @return {number}
 */
export function randomInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
