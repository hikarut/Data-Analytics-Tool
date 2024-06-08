// import jStat from 'jstat'
import * as jStat from 'jstat';

/*
 * CVRの取得
 * @param number 分子
 * @param number 分母
 * @return number CVR
 */
export function getCvr(conversions: number, visitors: number): number {
  return conversions / visitors
}

/*
 * パーセンテージに計算して任意の桁数で四捨五入する
 * @param number 値
 * @param number 桁 10→1桁 100→2桁
 * @return number パーセンテージにして四捨五入した値
 */
export function percentRound(value: number, base: number): number {
  return Math.round(value * base * 100) / base
}

/*
 * 任意の桁数で四捨五入する
 * @param number 値
 * @param number 桁 10→1桁 100→2桁
 * @return number 四捨五入した値
 */
export function valueRound(value: number, base: number): number {
  return Math.round(value * base) / base
}

/*
 * プール値の取得
 * @param number Aパターン訪問数
 * @param number AパターンCVR
 * @param number Bパターン訪問数
 * @param number BパターンCVR
 * @return number プール値
 */
export function getPoolValue(
  aVisitors: number,
  aCvr: number,
  bVisitors: number,
  bCvr: number
): number {
  return (aVisitors * aCvr + bVisitors * bCvr) / (aVisitors + bVisitors)
}

/*
 * z値の取得
 * @param number Aパターン訪問数
 * @param number AパターンCVR
 * @param number Bパターン訪問数
 * @param number BパターンCVR
 * @return number プール値
 */
export function getZValue(
  aVisitors: number,
  aCvr: number,
  bVisitors: number,
  bCvr: number,
  pool: number
): number {
  return (
    (aCvr - bCvr) /
    Math.sqrt(pool * (1 - pool) * (1 / aVisitors + 1 / bVisitors))
  )
}

/*
 * p値の取得
 * @param number Aパターン訪問数
 * @param number AパターンCVR
 * @param number Bパターン訪問数
 * @param number BパターンCVR
 * @return number プール値
 */
export function getPValue(zValue: number): number {
  // z値、平均、標準偏差
  // return jStat.normal.cdf(zValue, 0, 1)
  return jStat.jStat.normal.cdf(zValue, 0, 1);
  
}
