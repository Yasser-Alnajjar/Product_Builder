/**
 *
 * @param {string} text - The input text to be sliced
 * @param {number} max - The maximum length before truncation
 * @returns - The sliced text, with an ellipsis (...) appended if truncated
 */
export function sliceText(text: string, max: number = 50) {
  return text.length >= max ? `${text.slice(0, max)}...` : text;
}
