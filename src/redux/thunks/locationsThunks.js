import axios from "axios";
import {
  deleteLocationAction,
  loadCurrentLocationAction,
  loadLocationsAction,
  updateLocationAction,
} from "../actions/actionCreators";

// const urlApi = process.env.REACT_APP_URL_API;
const urlApi = process.env.REACT_APP_URL_LOCAL;

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

export const updateLocationThunk = (location, id) => {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("user"));
    const { data } = await axios.put(`${urlApi}/${id}`, location, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data.status === 200) {
      dispatch(updateLocationAction(data));
    }
  };
};

export const deleteLocationThunk = (id) => {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("user"));
    const { data } = await axios.delete(`${urlApi}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status === 200) {
      dispatch(deleteLocationAction(id));
    }
  };
};
