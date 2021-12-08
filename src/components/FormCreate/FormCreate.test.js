import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";

import FormCreate from "./FormCreate";

const store = configureStore();

describe("Given a FormCreate component", () => {
  describe("When it's rendered", () => {
    test("Then it should render it's inputs and buttons", () => {
      render(
        <Provider store={store}>
          <Router>
            <FormCreate />
          </Router>
        </Provider>
      );

      const title = screen.getByText(/crear organización/i);
      const select = screen.getByRole("combobox");
      const option = screen.getByRole("option", { name: "Comedor social" });
      const name = screen.getByLabelText(/Nombre de la organización/i);
      const street = screen.getByLabelText(/Introduce la dirección/i);
      const postcode = screen.getByLabelText(/Introduce el código postal/i);
      const capacity = screen.getByLabelText(/Introduce el aforo disponible/i);
      const button = screen.getByRole("button", { name: "crear" });

      expect(title).toBeInTheDocument();
      expect(select).toBeInTheDocument();
      expect(option).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(street).toBeInTheDocument();
      expect(postcode).toBeInTheDocument();
      expect(capacity).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user type in inputs", () => {
    test("Then it should change a value", () => {
      render(
        <Provider store={store}>
          <Router>
            <FormCreate />
          </Router>
        </Provider>
      );

      userEvent.type(
        screen.getByRole("textbox", { name: "Nombre de la organización" }),
        `Comedor social Raval`
      );
      userEvent.type(
        screen.getByRole("textbox", { name: "Introduce la dirección" }),
        `Calle Murcia`
      );
      userEvent.type(
        screen.getByRole("textbox", { name: "Introduce el código postal" }),
        `08030`
      );

      userEvent.type(
        screen.getByRole("textbox", { name: "Teléfono de contacto" }),
        `933986595`
      );

      expect(
        screen.getByRole("textbox", { name: "Nombre de la organización" })
      ).toHaveValue("Comedor social Raval");
      expect(
        screen.getByRole("textbox", { name: "Introduce la dirección" })
      ).toHaveValue("Calle Murcia");
      expect(
        screen.getByRole("textbox", { name: "Introduce el código postal" })
      ).toHaveValue("08030");

      expect(
        screen.getByRole("textbox", { name: "Teléfono de contacto" })
      ).toHaveValue("933986595");
    });
  });
});
