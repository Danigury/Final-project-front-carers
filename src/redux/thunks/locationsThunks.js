import axios from "axios";
import {
  loadCurrentLocationAction,
  loadLocationsAction,
} from "../actions/actionCreators";

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

export const loadCurrentLocationThunk = (id) => {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("user"));
    const { data } = await axios.get(`${urlApi}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(loadCurrentLocationAction(data));
  };
};

export const createNewLocationThunk = (location) => {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("user"));
    const { data } = await axios.post(`${urlApi}/create`, location, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data === 200) {
      dispatch(createNewLocationThunk(data));
    }
  };
};
