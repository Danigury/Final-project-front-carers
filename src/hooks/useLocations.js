import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocationsThunk } from "../redux/thunks/locationsThunks";

const useLocations = () => {
  const locations = useSelector((store) => store.locations);
  const dispatch = useDispatch();

  const loadLocations = useCallback(() => {
    dispatch(loadLocationsThunk());
  }, [dispatch]);

  return { locations, loadLocations };
};

export default useLocations;
