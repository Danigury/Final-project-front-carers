import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";
import Button from "../Button/Button";
import "./LocationDetail.scss";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../../images/marker.png";

const LocationDetail = ({ location, agenda }) => {
  const { loadCurrentLocation, deleteLocation, resetCurrentLocation } =
    useLocations();

  const navigate = useNavigate();
  const goToLocationsPage = () => {
    resetCurrentLocation();
    navigate(`/location/`);
  };
  const onDeleteLocation = (id, location) => {
    deleteLocation(id, location);
    navigate("/location");
  };
  const goToUpdatePage = (id) => {
    loadCurrentLocation(id);
    navigate(`/location/update/${id}`);
  };
  const iconMarker = L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: [30, 45],
  });
  return (
    <div className="locationBox-detail">
      <div className="locationBox-detail__container">
        <div className="locationBox-detail__text">
          <h2 className="text-name">{location.name}</h2>
          <p className="text text-type">{location.type}</p>
          <p className="text text-address">{location.address?.street}</p>
          <p className="text text-address__postcode">
            {location.address?.postcode}
          </p>
          <a
            href={`tel://${location.phonenumber}`}
            className="text text-phonenumber"
          >
            {location.phonenumber}
          </a>
          <p className="text text-capacity">
            Capacidad para {location.capacity} personas
          </p>
        </div>
        <div className="locationBox-detail__map">
          {location?.address?.coordinates !== undefined ? (
            <MapContainer
              center={{
                lat: location?.address?.coordinates?.latitude,

                lng: location?.address?.coordinates?.longitude,
              }}
              zoom={16}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={{
                  lat: location.address?.coordinates?.latitude,
                  lng: location.address?.coordinates?.longitude,
                }}
                icon={iconMarker}
              />
            </MapContainer>
          ) : (
            ""
          )}
        </div>

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
