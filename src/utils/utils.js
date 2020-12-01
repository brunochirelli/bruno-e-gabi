export const truncateText = (str, maxLength) => {
  if (typeof str === "string" && typeof maxLength === "number")
    return str.split("").length > maxLength
      ? `${str.substring(0, maxLength - 3)}...`
      : str;
  else return str;
};
