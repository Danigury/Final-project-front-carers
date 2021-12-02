import actionTypes from "./actionTypes";

export const loadLocationsAction = (locations) => ({
  type: actionTypes.loadLocations,
  locations,
});

export const registerUserAction = (user) => ({
  type: actionTypes.registerUser,
  user,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
  user: {},
});
