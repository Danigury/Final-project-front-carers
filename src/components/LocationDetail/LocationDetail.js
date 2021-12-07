import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";
import Button from "../Button/Button";
import "./LocationDetail.scss";

const LocationDetail = ({ location, agenda }) => {
  const navigate = useNavigate();
  const goToLocationsPage = () => {
    navigate(`/location/`);
  };
  const { loadCurrentLocation, deleteLocation } = useLocations();
  const onDeleteLocation = (id, location) => {
    deleteLocation(id, location);
    navigate("/location");
  };
  const goToUpdatePage = (id) => {
    loadCurrentLocation(id);
    navigate(`/location/update/${id}`);
  };

  return (
    <div className="locationBox-detail">
      <div className="locationBox-detail__text">
        <h2 className="text-name">{location.name}</h2>
        <p className="text text-type">{location.type}</p>
        <p className="text text-address">{location.address?.street}</p>
        <p className="text text-address__postcode">
          {location.address?.postcode}
        </p>
        <p className="text text-phonenumber">{location.phonenumber}</p>
        <p className="text text-capacity">
          Capacidad para {location.capacity} personas
        </p>
        <iframe
          className="map"
          title="map"
          width="300"
          height="250"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.address?.coordinates?.longitude}%2C${location.address?.coordinates?.latitude}&amp;layer=mapnik&amp;marker=${location.address?.coordinates?.latitude}%2C${location.address?.coordinates?.longitude}`}
        ></iframe>

        <div className="locationBox-detail__buttons">
          <Button
            text="modificar"
            className="button button-modificar"
            actionOnClick={() => goToUpdatePage(location.id)}
          />
          <Button
            text="eliminar"
            className="button button-eliminar"
            actionOnClick={() => onDeleteLocation(location.id)}
          />
        </div>
      </div>
      <Button
        text="+ localizaciones"
        className="button-volver"
        actionOnClick={() => goToLocationsPage()}
      />
    </div>
  );
};

export default LocationDetail;
