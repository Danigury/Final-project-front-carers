import {
  loginUserAction,
  registerUserAction,
  logoutUserAction,
} from "../actions/actionCreators";
import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("When it receives a user and a loginUserAction", () => {
    test("Then it should return a logged user", () => {
      const user = {
        username: "daniel",
        password: "daniel",
      };
      const loggedUser = userReducer({}, loginUserAction(user));

      expect(loggedUser.isAuthenticated).toBe(true);
    });
  });
  describe("When it receives a user and a registerUserAction", () => {
    test("Then it should return a new user", () => {
      const user = {
        username: "luis",
        password: "luis",
      };
      const newUser = userReducer({}, registerUserAction(user));

      expect(newUser.isAuthenticated).toBe(false);
    });
  });
  describe("When it receives a user and a logoutUserAction", () => {
    test("Then it should logout the user", () => {
      const user = {
        username: "luis",
        password: "luis",
      };
      const newUser = userReducer({}, logoutUserAction(user));

      expect(newUser.isAuthenticated).toBe(false);
    });
  });
});
