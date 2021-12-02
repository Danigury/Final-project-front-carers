import { useEffect } from "react";

import LocationsList from "../../components/LocationsList/LocationsList";
import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";
import "./LocationsPage.scss";
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
    <div className="locations-page-box">
      <h2 className="locations-page-box__title">localizaciones</h2>
      <LocationsList />
    </div>
  );
};

export default LocationsPage;
