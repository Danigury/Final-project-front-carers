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
        <p className="text-type">{location.type}</p>
        <p className="text-address">{location.address.street}</p>
        <p className="text-address__postcode">{location.address.postcode}</p>
        <p className="text-phonenumber">{location.phonenumber}</p>
        <p className="capacity">Capacidad para {location.capacity} personas</p>
        <iframe
          className="map"
          title="map"
          width="300"
          height="300"
          src="https://www.openstreetmap.org/export/embed.html?bbox=2.165993750095368%2C41.38004486252291%2C2.1685042977333073%2C41.38138522188013&amp;layer=mapnik"
        ></iframe>

        <Button
          text="modificar localización"
          className="button-modificar"
          actionOnClick={() => goToUpdatePage(location.id)}
        />
        <Button
          text="eliminar localización"
          className="button-eliminar"
          actionOnClick={() => onDeleteLocation(location.id)}
        />
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
