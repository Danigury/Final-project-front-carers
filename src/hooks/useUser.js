import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "../redux/thunks/userThunks";

const useUser = () => {
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
  return { loginUser, logoutUser, registerUser };
};

export default useUser;
