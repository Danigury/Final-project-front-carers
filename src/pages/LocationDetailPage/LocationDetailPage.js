import { useEffect } from "react";
import { useParams } from "react-router";
import LocationDetail from "../../components/LocationDetail/LocationDetail";
import useLocations from "../../hooks/useLocations";

const LocationDetailPage = () => {
  const { location, loadCurrentLocation } = useLocations();
  const { id } = useParams();
  useEffect(() => {
    loadCurrentLocation(id);
  }, [loadCurrentLocation, id]);
  return (
    <div className="location-detail-box">
      <LocationDetail location={location} />
    </div>
  );
};

export default LocationDetailPage;
