import { combineReducers } from "redux";
import locationsReducer from "./locationsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  locations: locationsReducer,
  user: userReducer,
});

export default rootReducer;
