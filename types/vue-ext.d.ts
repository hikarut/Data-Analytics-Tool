declare module '*.js' {
  // const value: any
  // export default value
}

declare module 'jstat' {
  // const value: any
  // export default value
  export const jStat: {
    normal: {
      cdf: (value: number, mean: number, standardDeviation: number) => number;
    };
  };
}
