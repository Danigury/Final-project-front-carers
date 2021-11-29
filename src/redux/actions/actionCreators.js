import actionTypes from "./actionTypes";

export const loadLocationsAction = (locations) => ({
  type: actionTypes.loadLocations,
  locations,
});
