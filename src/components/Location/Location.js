import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import "./Location.scss";

const Location = ({ location, agenda, goToLocationDetails }) => {
  const navigate = useNavigate();
  const goToLocationDetailPage = () => {};
  return (
    <li className="location-ApiBox" onClick={() => {}}>
      <div className="locationBox__text">
        <h2 className="text-name">{location.name}</h2>
        <p className="text-type">{location.type}</p>
        <div>
          <Button
            text="entrar"
            className="button-noline"
            actionOnClick={goToLocationDetailPage}
          />
          <p className="capacity">
            Capacidad para {location.capacity} personas
          </p>
        </div>
      </div>
    </li>
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
