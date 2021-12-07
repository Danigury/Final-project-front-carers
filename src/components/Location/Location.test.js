import { LocationsToMock } from "../../mocks/mockDetails";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Location from "./Location";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import configureStore from "../../redux/store";
import Button from "../Button/Button";

describe("Given a Location component", () => {
  describe("When it receives Location", () => {
    test("Then it should render the location", () => {
      const location = LocationsToMock[0];
      const store = configureStore();

      render(
        <Provider store={store}>
          <Router>
            <Location location={location} />
          </Router>
        </Provider>
      );
      const name = screen.getByRole("heading", { name: location.name });
      const type = screen.getByText(location.type);
      const capacity = screen.getByText(
        `Capacidad para ${location.capacity} personas`
      );

      expect(name).toBeInTheDocument();
      expect(type).toBeInTheDocument();
      expect(capacity).toBeInTheDocument();
    });
  });

  describe("When it receives a button with onClick event", () => {
    test("Then it should invoke that function", () => {
      const text = "detalles";
      const actionOnClick = jest.fn();
      const className = "button-detalles";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );
      const button = screen.getByRole("button", { name: "detalles" });
      userEvent.click(button);
      expect(actionOnClick).toBeCalled();
    });
  });
});
