import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk, logoutUserThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );
  const logoutUser = () => {
    dispatch(logoutUserThunk());
  };
  return { loginUser, logoutUser };
};

export default useUser;
