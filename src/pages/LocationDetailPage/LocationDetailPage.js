import React, { useEffect } from "react";
import { useParams } from "react-router";
import LocationDetail from "../../components/LocationDetail/LocationDetail";
import useLocations from "../../hooks/useLocations";

const LocationDetailPage = () => {
  const { locations } = useLocations();
  const { id } = useParams();
  const locationFiletered = locations?.filter((e) => e.id === id);

  return (
    <div className="location-detail-box">
      <LocationDetail location={locationFiletered[0]} />
    </div>
  );
};

export default LocationDetailPage;
