import actionTypes from "../actions/actionTypes";

const locationReducer = (location = {}, action) => {
  let newLocation;
  switch (action.type) {
    case actionTypes.loadCurrentLocation:
      newLocation = { ...action.location };
      break;

    case actionTypes.createNewLocation:
      newLocation = { ...action.location };
      break;

    case actionTypes.updateLocation:
      newLocation = { ...action.location };
      break;

    case actionTypes.deleteLocation:
      newLocation = { ...action.location };
      break;

    default:
      newLocation = location;
  }

  return newLocation;
};

export default locationReducer;
