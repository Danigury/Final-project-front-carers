import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction, logoutUserAction } from "../actions/actionCreators";

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

export const logoutUserThunk = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logoutUserAction());
};
