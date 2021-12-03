// import PropTypes from "prop-types";
import "./LocationDetail.scss";

const LocationDetail = ({ location, agenda }) => {
  return (
    <div className="locationBox-detail__text">
      <h2 className="text-name">{location.name}</h2>
      <p className="text-type">{location.type}</p>
      <p className="text-address">{location.address.street}</p>
      <p className="text-address__postcode">{location.address.postcode}</p>
      <p className="text-phonenumber">{location.phonenumber}</p>
      <p className="capacity">Capacidad para {location.capacity} personas</p>
    </div>
  );
};

// LocationDetail.propTypes = {
//   location: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     address: PropTypes.shape({
//       street: PropTypes.string.isRequired,
//       postcode: PropTypes.string.isRequired,
//     }),
//     phonenumber: PropTypes.string.isRequired,
//     capacity: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default LocationDetail;
