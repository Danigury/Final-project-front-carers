import axios from "axios";
import { loadLocationsAction } from "../actions/actionCreators";

export const loadLocationsThunk = () => async (dispatch) => {
  const { data: location } = await axios.get(process.env.REACT_APP_URL_API);
  dispatch(loadLocationsAction(location));
};
