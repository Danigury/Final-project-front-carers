import { useEffect } from "react";

import LocationDetail from "../../components/LocationDetail/LocationDetail";
import useLocations from "../../hooks/useLocations";

const LocationDetailPage = ({ user }) => {
  const { loadLocations } = useLocations();

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
