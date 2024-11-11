/**
 * Given a number and an optional number of digits, format the number in a human-friendly string format.
 *
 * Abbreviates large numbers with a suffix e.g. 1000 -> '1K', 1000000 -> '1M', etc.
 */
export function formatHumanizeNumber(num: number, digits?: number): string {
  if (!num) {
    return '0'
  }

  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]

  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })

  return item ? (num / item.value).toFixed(digits || 1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + item.symbol : '0'
}
