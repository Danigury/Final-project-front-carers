import { render, screen } from "@testing-library/react";
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
});
