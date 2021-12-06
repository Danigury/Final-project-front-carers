import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import FormLogin from "./FormLogin";
const store = configureStore();

describe("Given a FormLogin component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the inputs and button", () => {
      render(
        <Provider store={store}>
          <Router>
            <FormLogin />
          </Router>
        </Provider>
      );

      const username = screen.getByLabelText(/Nombre/i);
      const password = screen.getByLabelText(/Contraseña/i);
      const buttonLogin = screen.getByRole("button", { name: /continúa/i });
      const buttonRegister = screen.getByRole("button", {
        name: /regístrate/i,
      });

      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(buttonLogin).toBeInTheDocument();
      expect(buttonRegister).toBeInTheDocument();
    });
  });
});
