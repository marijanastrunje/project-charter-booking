import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoatAmenities = ({ amenities }) => {
  return (
    <div className="boat-amenities mb-4">
      <h3 className="h5 fw-semibold mb-3">Amenities</h3>
      <div className="row g-3">
        {amenities.map((amenity, index) => (
          <div key={index} className="col-6 col-lg-4">
            <div className="amenity-item d-flex align-items-center">
              <FontAwesomeIcon icon={amenity.icon} className="text-primary me-2" />
              <span>{amenity.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoatAmenities;
