import { render } from "../../utils/test-utils";

test("Check if the cart is empty", () => {
  const { getByTestId } = render();
  const cart = getByTestId("cart");

  expect(cart).toHaveTextContent(/^0$/);
});
