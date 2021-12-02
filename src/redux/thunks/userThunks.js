import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "../actions/actionCreators";

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_LOCATIONS_URL_LOGIN,
      user
    );

    if (response.status === 200) {
      const token = response.data.token;
      const userLogin = jwtDecode(token);
      dispatch(loginUserAction(userLogin));
      localStorage.setItem("user", JSON.stringify(token));
    }
  } catch {
    new Error("You're not a registered user");
  }
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    <process className="env REACT_APP_LOCATIONS_URL_REGISTER"></process>,
    user
  );

  if (response.status === 200) {
    dispatch(registerUserAction(response.data));
  }
};

export const logoutUserThunk = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logoutUserAction());
};
