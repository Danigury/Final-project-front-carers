import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/store";
const store = configureStore();

describe("Given an app component", () => {
  describe("When it renders", () => {
    test("Then it should render a Header and a Footer", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const logo = screen.getByText("carers.");

      expect(logo).toHaveClass("logo");
    });
  });
});
