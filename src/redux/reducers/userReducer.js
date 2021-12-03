import actionTypes from "../actions/actionTypes";

const userReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = {
        ...user,
        isAuthenticated: true,
      };
      break;

    case actionTypes.registerUser:
      newUser = { user: action.user, isAuthenticated: false };
      break;

    case actionTypes.logoutUser:
      newUser = {
        ...user,
        isAuthenticated: false,
      };
      break;

    default:
      newUser = user;
  }

  return newUser;
};

export default userReducer;
