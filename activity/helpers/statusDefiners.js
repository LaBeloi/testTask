import { priceVars, accessibilityVars } from '../../config/variables.js';

export const priceQueries = {
  free: {
    price: 0
  },
  high: {
    minprice: 0.501
  },
  low: {
    minprice: 0.1,
    maxprice: 0.5
  }
}

export const accessibilityQueries = {
  medium: {
    minaccessibility: 0.251,
    maxaccessibility: 0.75
  },
  high: {
    maxaccessibility: 0.25
  },
  low: {
    minaccessibility: 0.751
  }
}

export const setPriceStatus = (price) => {
  if (typeof price !== 'number') throw new Error('Price must be a number');
  if (price === 0) return priceVars.free
  if (price > 0.5) return priceVars.high
  return priceVars.low
};

export const setAccessibilityStatus = (access) => {
  if (typeof access !== 'number') throw new Error('Accessibility must be a number');
  if (access <= 0.25) return accessibilityVars.high
  if (access > 0.75) return accessibilityVars.low
  return accessibilityVars.medium
}