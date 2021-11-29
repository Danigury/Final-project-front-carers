import actionTypes from "./actionTypes";

export const loadLocationsActions = (locations) => ({
  type: actionTypes.loadLocations,
  locations,
});
