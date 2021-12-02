import { useEffect } from "react";
import { useNavigate } from "react-router";
import LocationDetail from "../../components/LocationDetail/LocationDetail";
import useLocations from "../../hooks/useLocations";

const LocationDetailPage = ({ user }) => {
  const { loadLocations } = useLocations();
  const navigate = useNavigate();

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);

  return (
    <div className="location-detail-box">
      <LocationDetail />
    </div>
  );
};

export default LocationDetailPage;
