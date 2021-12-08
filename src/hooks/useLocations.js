import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCurrentLocationAction } from "../redux/actions/actionCreators";
import {
  loadCurrentLocationThunk,
  loadLocationsThunk,
  createNewLocationThunk,
  updateLocationThunk,
  deleteLocationThunk,
} from "../redux/thunks/locationsThunks";

const useLocations = () => {
  const locations = useSelector((store) => store.locations);
  const location = useSelector((store) => store.location);
  const dispatch = useDispatch();

  const loadLocations = useCallback(() => {
    dispatch(loadLocationsThunk());
  }, [dispatch]);

  const loadCurrentLocation = useCallback(
    (id) => {
      dispatch(loadCurrentLocationThunk(id));
    },
    [dispatch]
  );

  const createNewLocation = (location) => {
    dispatch(createNewLocationThunk(location));
  };

  const updateLocation = (location, id) => {
    dispatch(updateLocationThunk(location, id));
  };

  const resetCurrentLocation = () => {
    dispatch(resetCurrentLocationAction());
  };

  const deleteLocation = (id) => {
    dispatch(deleteLocationThunk(id));
  };

  return {
    locations,
    location,
    loadLocations,
    loadCurrentLocation,
    createNewLocation,
    updateLocation,
    deleteLocation,
    resetCurrentLocation,
  };
};

export default useLocations;
