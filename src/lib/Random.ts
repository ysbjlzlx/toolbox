/**
 * 生成整数随机数
 * 包含最小值，不含最大值的随机数
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @return {number}
 */
export function random(min: number, max: number): number {
  const ceilMin = Math.ceil(min);
  const ceilMax = Math.floor(max);
  return Math.floor(Math.random() * (ceilMax - ceilMin)) + ceilMin;
}

/**
 * 生成整数随机数
 * 同时包含最小值和最大值的随机数
 * @param min 最小值（包含）
 * @param max 最大值（包含）
 * @return {number}
 */
export function randomInclusive(min: number, max: number): number {
  const ceilMin = Math.ceil(min);
  const ceilMax = Math.floor(max);
  return Math.floor(Math.random() * (ceilMax - ceilMin + 1)) + ceilMin;
}
