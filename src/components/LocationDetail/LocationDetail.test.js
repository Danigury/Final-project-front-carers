import { LocationsToMock } from "../../mocks/mockDetails";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LocationDetail from "./LocationDetail";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import Button from "../Button/Button";
import userEvent from "@testing-library/user-event";
describe("Given a Location component", () => {
  describe("When it receive a robot", () => {
    test("It should render the robot", () => {
      const location = LocationsToMock[0];
      const store = configureStore();
      render(
        <Provider store={store}>
          <Router>
            <LocationDetail location={location} />
          </Router>
        </Provider>
      );
      const name = screen.getByRole("heading", { name: location.name });
      const postcode = screen.getByText(location.address.postcode);
      const type = screen.getByText(
        `Capacidad para ${location.capacity} personas`
      );
      const buttonModificar = screen.getByRole("button", { name: "modificar" });
      const buttonEliminar = screen.getByRole("button", { name: "eliminar" });
      const buttonLocalizaciones = screen.getByRole("button", {
        name: "+ localizaciones",
      });

      expect(name).toBeInTheDocument();
      expect(type).toBeInTheDocument();
      expect(postcode).toBeInTheDocument();
      expect(buttonModificar).toBeInTheDocument();
      expect(buttonEliminar).toBeInTheDocument();
      expect(buttonLocalizaciones).toBeInTheDocument();
    });
  });
  describe("When it receives a buttons with onClick event", () => {
    test("Then it should invoke that function", () => {
      const text = "modificar";
      const actionOnClick = jest.fn();
      const className = "button button-modificar";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );

      const button = screen.getByRole("button", { name: "modificar" });
      userEvent.click(button);
      expect(actionOnClick).toBeCalled();
    });
  });
});
