// Default exchange rate: 1 USD = 300 LKR
const EXCHANGE_RATE = 300;

/**
 * Convert LKR amount to USD
 * @param lkr - Amount in Sri Lankan Rupees
 * @returns Formatted USD string
 */
export const convertToUSD = (lkr: number): string => {
  const usd = lkr / EXCHANGE_RATE;
  return `USD ${Math.round(usd)}`;
};

/**
 * Convert LKR to USD for per-unit pricing (e.g., per km)
 * @param lkr - Amount in Sri Lankan Rupees
 * @returns Formatted USD string with decimals
 */
export const convertToUSDPerUnit = (lkr: number): string => {
  const usd = lkr / EXCHANGE_RATE;
  return `USD ${usd.toFixed(2)}`;
};

/**
 * Format LKR amount
 * @param lkr - Amount in Sri Lankan Rupees
 * @returns Formatted LKR string
 */
export const formatLKR = (lkr: number): string => {
  return `LKR ${lkr.toLocaleString()}`;
};

/**
 * Get price in selected currency
 * @param lkr - Base amount in LKR
 * @param currency - Selected currency ('LKR' or 'USD')
 * @param isPerUnit - Whether this is a per-unit price (affects decimal places)
 * @returns Formatted price string
 */
export const getPrice = (lkr: number, currency: 'LKR' | 'USD', isPerUnit: boolean = false): string => {
  if (currency === 'LKR') {
    return formatLKR(lkr);
  }
  return isPerUnit ? convertToUSDPerUnit(lkr) : convertToUSD(lkr);
};
