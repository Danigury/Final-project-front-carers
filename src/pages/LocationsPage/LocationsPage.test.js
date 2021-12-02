import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import { server } from "../../mocks/server";

import { screen, render, waitFor } from "@testing-library/react";
import LocationsPage from "./LocationsPage";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
describe("Given a LocationsPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should a list of locations", async () => {
      // const locations = LocationsToMock;
      const user = {
        isAuthenticated: true,
      };
      screen.debug();
      render(
        <Provider store={store}>
          <Router>
            <LocationsPage user={user} />
          </Router>
        </Provider>
      );
      const locationA = await screen.findByText("Localizaciones");
      const locationB = await screen.findByRole("list");

      await waitFor(() => {
        expect(locationA).toBeInTheDocument();
        expect(locationB).toBeInTheDocument();
      });
    });
  });
});
