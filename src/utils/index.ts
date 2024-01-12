/**
 * @param {string} text - The input text to be sliced
 * @param {number} max - The maximum length before truncation
 * @returns - The sliced text, with an ellipsis (...) appended if truncated
 */
export function sliceText(text: string, max: number = 50) {
  return text.length >= max ? `${text.slice(0, max)}...` : text;
}

/**
 *
 * @param {string} x - The numeric string to be formatted.
 * @returns {string} A formatted version of the input numeric string with commas as thousand separators.
 *
 */
export function numberWithCommas(x: number): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
