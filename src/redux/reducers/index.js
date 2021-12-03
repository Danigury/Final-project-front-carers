import { combineReducers } from "redux";
import locationsReducer from "./locationsReducer";
import locationReducer from "./locationReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  locations: locationsReducer,
  location: locationReducer,
  user: userReducer,
});

export default rootReducer;
