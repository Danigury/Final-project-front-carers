import actionTypes from "../actions/actionTypes";

const locationReducer = (location = {}, action) => {
  let newLocation;
  switch (action.type) {
    case actionTypes.loadCurrentLocation:
      newLocation = { ...action.location };
      break;

    default:
      newLocation = location;
  }

  return newLocation;
};

export default locationReducer;
