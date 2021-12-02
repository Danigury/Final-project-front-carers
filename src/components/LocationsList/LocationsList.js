import Proptypes from "prop-types";
import useLocations from "../../hooks/useLocations";
import Location from "../Location/Location";
import "./LocationsList.scss";

const LocationsList = () => {
  const { locations } = useLocations();

  return (
    <div className="LocationsListBox">
      <ul className="LocationsList">
        {locations.map((location) => (
          <li
            key={location["id"]}
            className="location-ApiBox"
            onClick={() => {}}
          >
            <Location location={location} />
          </li>
        ))}
      </ul>
    </div>
  );
};

LocationsList.propTypes = {
  locations: Proptypes.arrayOf(Proptypes.object),
};

export default LocationsList;
