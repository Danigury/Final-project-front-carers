import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import CreatePage from "./CreatePage";

const store = configureStore();
describe("Given a CreatePage", () => {
  describe("When it receives a FormCreate component", () => {
    test("Then it should render the create form", () => {
      const user = {
        isAuthenticated: true,
      };
      render(
        <Provider store={store}>
          <Router>
            <CreatePage user={user} />
          </Router>
        </Provider>
      );

      const name = screen.getByRole("heading", {
        name: "crear organización",
      });
      const address = screen.getByLabelText(/Introduce la dirección/i);
      const button = screen.getByRole("button", { name: "crear" });
      expect(name).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
