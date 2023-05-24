export const PI = 3.1415
export const toRad = (n: number) => (n * PI) / 180
export const sq = (n: number) => n ** 2
export const { atan2, sqrt } = Math
export const roundToNth = (number: number, n = 0) => Math.round(number * 10 ** n) / 10 ** n
