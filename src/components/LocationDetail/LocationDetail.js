import { useNavigate } from "react-router";
import Button from "../Button/Button";
import "./LocationDetail.scss";

const LocationDetail = ({ location, agenda }) => {
  const navigate = useNavigate();
  const goToLocationsPage = () => {
    navigate(`/location/`);
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
      </div>
      <Button
        text="+ localizaciones"
        className="button-volver"
        actionOnClick={() => goToLocationsPage()}
      />
      <Button
        text="modificar localización"
        className="button-modificar"
        actionOnClick={() => {}}
      />
    </div>
  );
};

export default LocationDetail;
