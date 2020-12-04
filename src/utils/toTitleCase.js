/**
 * Title Case
 *
 * @param {String} str string to be converted
 * Converts a string to Title Case (first letter Uppercase, others lowercase)
 */
export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
