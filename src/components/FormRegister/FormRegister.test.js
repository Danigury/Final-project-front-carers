import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import FormRegister from "./FormRegister";

const store = configureStore();

describe("Given a FormRegister component", () => {
  describe("When it's rendered", () => {
    test("Then it should render an input and a button", () => {
      render(
        <Provider store={store}>
          <Router>
            <FormRegister />
          </Router>
        </Provider>
      );

      const username = screen.getByLabelText(/Introduce tu nombre/i);
      const password = screen.getByLabelText(/Introduce una contraseña/i);
      const buttonRegister = screen.getByRole("button", { name: /continúa/i });

      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(buttonRegister).toBeInTheDocument();
    });
  });
});
