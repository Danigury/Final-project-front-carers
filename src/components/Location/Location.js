import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import "./Location.scss";

const Location = ({ location, agenda, goToLocationDetails }) => {
  const navigate = useNavigate();
  const goToLocationDetailPage = () => {
    navigate("/location/detail");
  };
  return (
    <>
      <div className="location-ApiBox__text">
        <h2 className="text-name">{location.name}</h2>
        <p className="text-type">{location.type}</p>
        <p className="capacity">Capacidad para {location.capacity} personas</p>
      </div>
      <Button
        text="detalles"
        className="button-detalles"
        actionOnClick={goToLocationDetailPage}
      />
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
