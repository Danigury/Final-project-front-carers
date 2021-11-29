import actionTypes from "./actionTypes";

export const loadLocationsAction = (locations) => ({
  type: actionTypes.loadLocations,
  locations,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
  user: {},
});

export const loggedUserAction = (user) => ({
  type: actionTypes.loggedUser,
  user,
});
