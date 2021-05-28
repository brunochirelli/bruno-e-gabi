/**
 * Title Case
 *
 * @param {String} str string to be converted
 * Converts a string to Title Case (first letter Uppercase, others lowercase)
 */
export function toTitleCase(str) {
  if (typeof str !== "string") {
    throw Error(`Expected string instead got ${typeof str}`);
  }

  return str.trim().replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
