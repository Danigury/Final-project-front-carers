import Proptypes from "prop-types";
import Location from "../Location/Location";

const LocationsList = ({ locations }) => {
  <div className="LocationsListBox">
    <ul className="LocationsList">
      {locations.map((location) => (
        <Location key={location["_id"]} location={location} />
      ))}
    </ul>
  </div>;
};

LocationsList.propTypes = {
  locations: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default LocationsList;
