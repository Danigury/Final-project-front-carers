import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import UpdatePage from "./UpdatePage";

const store = configureStore();
describe("Given a UpdatePage", () => {
  describe("When it receives a FormUpdate component", () => {
    test("Then it should render the update form", () => {
      render(
        <Provider store={store}>
          <Router>
            <UpdatePage />
          </Router>
        </Provider>
      );

      const name = screen.getByRole("heading", {
        name: "modifica la organización",
      });
      const address = screen.getByLabelText(/Introduce la dirección/i);
      const button = screen.getByRole("button", { name: "guardar" });
      expect(name).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
