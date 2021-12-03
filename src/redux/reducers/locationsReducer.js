import actionTypes from "../actions/actionTypes";

const locationsReducer = (locations = [], action) => {
  let newLocations;
  switch (action.type) {
    case actionTypes.loadLocations:
      newLocations = [...action.locations];
      break;

    default:
      newLocations = locations;
  }

  return newLocations;
};

export default locationsReducer;
