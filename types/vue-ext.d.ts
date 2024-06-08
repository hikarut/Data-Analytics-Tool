declare module '*.js' {
  // const value: any
  // export default value
}

declare module 'jstat' {
  // const value: any
  // export default value
  import type { jStat } from 'jstat'
  export default jStat
}
