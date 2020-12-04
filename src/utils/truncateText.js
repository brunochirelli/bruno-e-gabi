/**
 * Create a truncate text (or excerpt) with a certain maximum of characters
 *
 * @param {String} str String to handle
 * @param {Number} maxLength Max character to consider
 *
 */
export const truncateText = (str, maxLength) => {
  if (typeof str === "string" && typeof maxLength === "number")
    return str.split("").length > maxLength
      ? `${str.substring(0, maxLength - 3)}...`
      : str;
  else return str;
};
