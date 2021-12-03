import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentLocationThunk,
  loadLocationsThunk,
  createNewLocationThunk,
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

  return {
    locations,
    location,
    loadLocations,
    loadCurrentLocation,
    createNewLocation,
  };
};

export default useLocations;
