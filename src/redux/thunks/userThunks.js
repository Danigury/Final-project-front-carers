import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "../actions/actionCreators";
import toast from "react-hot-toast";

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
      toast.success("Ya puedes usar la app!");
    }
  } catch {}
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    process.env.REACT_APP_LOCATIONS_URL_REGISTER,
    user
  );

  if (response.status === 200) {
    dispatch(registerUserAction(response.data));
    toast.success("Registro con éxito!");
  }
};

export const logoutUserThunk = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logoutUserAction());
  toast.success("Que vaya bien!");
};
