import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "../../components/Button/Button";
import configureStore from "../../redux/store";
import Home from "./Home";

const store = configureStore();
describe("Given a Home page", () => {
  describe("When it receives the page to render", () => {
    test("Then it should render the Home with two buttons", () => {
      render(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      );

      const login = screen.getByRole("button", { name: "entrar" });
      const register = screen.getByRole("button", { name: "crear cuenta" });

      expect(login).toBeInTheDocument();
      expect(register).toBeInTheDocument();
    });
  });

  describe("When it receives a buttons with onClick event", () => {
    test("Then it should invoke that function", () => {
      const text = "entrar";
      const actionOnClick = jest.fn();
      const className = "button-noline";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );

      const button = screen.getByRole("button", { name: "entrar" });
      userEvent.click(button);
      expect(actionOnClick).toBeCalled();
    });
  });
});
