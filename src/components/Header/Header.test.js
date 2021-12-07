import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store";
import Header from "./Header";
const store = configureStore();

describe("Given a Header component", () => {
  describe("When the component it's invoke", () => {
    test("Then it should render the header", () => {
      render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );

      const logo = screen.getByRole("link", { name: "carers." });
      const locations = screen.getByRole("link", { name: "organizaciones" });
      const create = screen.getByRole("link", {
        name: "crear organización",
      });
      const logout = screen.getByRole("link", {
        name: "cerrar sesión",
      });

      expect(logo).toBeInTheDocument();
      expect(locations).toBeInTheDocument();
      expect(create).toBeInTheDocument();
      expect(logout).toBeInTheDocument();
    });
  });
});
