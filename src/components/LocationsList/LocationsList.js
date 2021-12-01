import Proptypes from "prop-types";
import useLocations from "../../hooks/useLocations";
import Location from "../Location/Location";

const LocationsList = () => {
  const { locations } = useLocations();

  return (
    <div className="LocationsListBox">
      <ul className="LocationsList">
        {locations.map((location) => (
          <Location key={location["_id"]} location={location} />
        ))}
      </ul>
    </div>
  );
};

LocationsList.propTypes = {
  locations: Proptypes.arrayOf(Proptypes.object),
};

export default LocationsList;
