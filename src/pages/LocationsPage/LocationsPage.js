import { useEffect } from "react";

import LocationsList from "../../components/LocationsList/LocationsList";
import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";

const LocationsPage = ({ user }) => {
  const { loadLocations } = useLocations();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate("/");
    }
  });

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);

  return (
    <div>
      <h2>Localizaciones</h2>
      <LocationsList />
    </div>
  );
};

export default LocationsPage;
