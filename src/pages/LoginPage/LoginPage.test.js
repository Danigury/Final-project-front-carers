import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import LoginPage from "./LoginPage";
import { server } from "../../mocks/server";
import { BrowserRouter as Router } from "react-router-dom";

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
            <LoginPage />
          </Router>
        </Provider>
      );
    });
  });
});
