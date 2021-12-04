import actionTypes from "./actionTypes";

export const loadLocationsAction = (locations) => ({
  type: actionTypes.loadLocations,
  locations,
});

export const loadCurrentLocationAction = (location) => ({
  type: actionTypes.loadCurrentLocation,
  location,
});

export const createNewLocationAction = (location) => ({
  type: actionTypes.createNewLocation,
  location,
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
});
