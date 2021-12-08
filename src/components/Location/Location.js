import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";
import Button from "../Button/Button";
import "./Location.scss";

const Location = ({ location, agenda }) => {
  const navigate = useNavigate();
  const { loadCurrentLocation } = useLocations();

  const goToLocationDetailsPage = (id) => {
    loadCurrentLocation(id);
    navigate(`/location/${id}`);
  };

  return (
    <>
      <div
        className="location-ApiBox__text"
        onClick={() => goToLocationDetailsPage(location.id)}
      >
        <h2 className="text-name">{location?.name}</h2>
        <p className="text-type">{location?.type}</p>
        <p className="capacity">Capacidad para {location?.capacity} personas</p>
      </div>
      <div className="location-ApiBox__button">
        <Button
          text="detalles"
          className="button-detalles"
          actionOnClick={() => goToLocationDetailsPage(location.id)}
        />
      </div>
    </>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Location;
