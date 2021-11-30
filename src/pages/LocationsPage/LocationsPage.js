import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import LocationsList from "../../components/LocationsList/LocationsList";
import useLocations from "../../hooks/useLocations";

const LocationsPage = () => {
  const { locations, loadLocations } = useLocations();
  const isAuth = useSelector(({ user }) => user.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);

  return (
    <div>
      <h2>Localizaciones</h2>
      <LocationsList locations={locations} />
    </div>
  );
};

export default LocationsPage;
