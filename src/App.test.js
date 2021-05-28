import { cleanup, render } from "./utils/test-utils";
import App from "./App";

afterEach(cleanup);

test("Check if it renders", () => {
  render(<App />);

  // fireEvent.click(logo);
});
