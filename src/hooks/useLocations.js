import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentLocationThunk,
  loadLocationsThunk,
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

  return { locations, location, loadLocations, loadCurrentLocation };
};

export default useLocations;
