import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import { server } from "../../mocks/server";
import { BrowserRouter as Router } from "react-router-dom";
import UpdatePage from "./UpdatePage";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
const store = configureStore();
describe("Given a LoginPage", () => {
  describe("When it receives a FormLogin component", () => {
    test("Then it should render the login form", () => {
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
