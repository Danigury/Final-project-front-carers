import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import LocationsList from "./LocationsList";

import configureStore from "../../redux/store";

describe("Given a LocationsList component", () => {
  describe("When it's called", () => {
    test("Then it should render a list of locations", () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <LocationsList />
        </Provider>
      );
    });
  });
});
