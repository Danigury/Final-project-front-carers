import axios from "axios";
import { loadLocationsAction } from "../actions/actionCreators";

const urlApi = process.env.REACT_APP_URL_API;
export const loadLocationsThunk = () => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const { data: locations } = await axios.get(urlApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(loadLocationsAction(locations));
    } catch {}
  };
};
