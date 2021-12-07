import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import Button from "../Button/Button";

import FormUpdate from "./FormUpdate";

const store = configureStore();

describe("Given a FormUpdate component", () => {
  describe("When it's rendered", () => {
    test("Then it should render it's inputs and buttons", () => {
      render(
        <Provider store={store}>
          <Router>
            <FormUpdate />
          </Router>
        </Provider>
      );
      const title = screen.getByText(/modifica la organización/i);
      const select = screen.getByRole("combobox");
      const option = screen.getByRole("option", { name: "Centro de día" });
      const name = screen.getByLabelText(/Nombre de la organización/i);
      const street = screen.getByLabelText(/Introduce la dirección/i);
      const postcode = screen.getByLabelText(/Introduce el código postal/i);
      const capacity = screen.getByLabelText(/Introduce el aforo disponible/i);
      const button = screen.getByRole("button", { name: "guardar" });

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

  describe("When it receives a component Button", () => {
    test("Then it should render + localizaciones inside the button", () => {
      const text = "+ localizaciones";
      const actionOnClick = jest.fn();
      const className = "button-volver";

      render(
        <Provider store={store}>
          <Router>
            <FormUpdate>
              <Button
                text={text}
                actionOnClick={actionOnClick}
                className={className}
              />
            </FormUpdate>
          </Router>
        </Provider>
      );

      const button = screen.getByRole("button", { name: "+ localizaciones" });
      const result = button.textContent;

      expect(result).toEqual("+ localizaciones");
    });
  });

  describe("When it receives component Button", () => {
    test("Then it should invoke the function onClick", () => {
      const text = "+ localizaciones";
      const actionOnClick = jest.fn();
      const className = "button-volver";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );

      const button = screen.getByRole("button", { name: "+ localizaciones" });
      userEvent.click(button);
      expect(actionOnClick).toBeCalled();
    });
  });
});
