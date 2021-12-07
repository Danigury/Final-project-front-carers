import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import { server } from "../../mocks/server";
import { screen, render, waitFor } from "@testing-library/react";
import LocationDetailPage from "./LocationDetailPage";
import { BrowserRouter as Router } from "react-router-dom";
import { LocationsToMock } from "../../mocks/mockDetails";
import Button from "../../components/Button/Button";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a LocationDetailPage Page", () => {
  describe("When it's rendered", () => {
    test("Then it should render the Location with it's details", () => {
      const location = LocationsToMock[0];
      const store = configureStore();

      render(
        <Provider store={store}>
          <Router>
            <LocationDetailPage location={location} />
          </Router>
        </Provider>
      );

      const name = screen.getByRole("heading", { name: "" });
      expect(name).toBeInTheDocument();
    });
  });

  describe("When it receives a button with onClick event", () => {
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
