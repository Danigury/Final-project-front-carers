import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/actions/actionCreators";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "../redux/thunks/userThunks";

const useUser = () => {
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  const registerUser = (user) => {
    dispatch(registerUserThunk(user));
  };

  const logoutUser = () => {
    dispatch(logoutUserThunk());
  };
  const isLogged = useCallback(() => {
    const isLoggedUser = JSON.parse(localStorage.getItem("user"));
    if (isLoggedUser) {
      const userData = jwtDecode(isLoggedUser.token);
      dispatch(loginUserAction(userData));
    }
  }, [dispatch]);

  return { loginUser, logoutUser, registerUser, isLogged, user };
};

export default useUser;
