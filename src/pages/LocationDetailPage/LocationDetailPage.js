import { useParams } from "react-router";
import LocationDetail from "../../components/LocationDetail/LocationDetail";
import useLocations from "../../hooks/useLocations";

const LocationDetailPage = () => {
  const { loadCurrentLocation, setLoadCurrentLocation } = useLocations();
  const { id } = useParams();

  setLoadCurrentLocation(id);

  return (
    <div className="location-detail-box">
      <LocationDetail location={loadCurrentLocation} />
    </div>
  );
};

export default LocationDetailPage;
