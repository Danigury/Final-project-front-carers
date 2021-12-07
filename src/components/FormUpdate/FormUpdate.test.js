import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";

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
    });
  });
});
