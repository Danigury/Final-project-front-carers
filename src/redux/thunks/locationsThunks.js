import axios from "axios";
import { loadLocationsAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API;
export const loadLocationsThunk = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("user");
      const { user: location } = await axios.get(urlApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(loadLocationsAction(location));
    } catch {}
  };
};
