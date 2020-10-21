import { breakpoints } from './variables'

const breakpointsKeys = Object.keys(breakpoints)

/**
 * Above breakpoint
 *
 * @param {keyof typeof import("./variables").breakpoints} breakpoint
 * @param {string} rules
 */
export function above(breakpoint, rules) {
  return breakpoint === breakpointsKeys[0]
    ? rules
    : `
  @media (min-width: ${breakpoints[breakpoint]}px) {
    ${rules}
  }`
}

/**
 * Between breakpoint
 *
 * @param {keyof typeof import("./variables").breakpoints} breakpointMin
 * @param {keyof typeof import("./variables").breakpoints} breakpointMax
 * @param {string} rules
 */
export function between(breakpointMin, breakpointMax, rules) {
  return breakpointMin === breakpointsKeys[0]
    ? `
    @media (max-width: ${breakpoints[breakpointMax] - 0.02}px) {
      ${rules}
    }`
    : `
    @media (min-width: ${
      breakpoints[breakpointMin]
    }px) and (max-width: ${breakpoints[breakpointMax] - 0.02}px) {
      ${rules}
    }`
}
