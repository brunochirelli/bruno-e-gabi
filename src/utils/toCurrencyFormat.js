export function toCurrencyFormat(number, location = "pt-br", currency = "BRL") {
  if (
    typeof number === "number" &&
    typeof location === "string" &&
    typeof currency === "string"
  )
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  else {
    return console.error("One of your params have incorrect type:", {
      number: {
        type: typeof number,
        expected: "number",
      },
      location: {
        type: typeof location,
        expected: "string",
      },
      currency: {
        type: typeof currency,
        expected: "string",
      },
    });
  }
}
