import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRulerCombined,
  faUsers,
  faClock,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import InfoChip from '../../../common/InfoChip';

const BoatHeader = ({ boat }) => {
  return (
    <div className="boat-header mb-4">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h1 className="h2 fw-bold mb-1">{boat.brand}</h1>
          {boat.name && <h2 className="h5 text-muted mb-2">{boat.name}</h2>}

          {/* Quick Info Chips */}
          <div className="mb-3">
            <InfoChip icon={faRulerCombined}>{boat.size}</InfoChip>
            <InfoChip icon={faUsers}>{boat.guests} Guests</InfoChip>
            <InfoChip icon={faClock}>{boat.duration}</InfoChip>
          </div>

          {/* Location */}
          <div className="mb-3">
            <span className="badge bg-light text-body border">
              <FontAwesomeIcon icon={faLocationDot} className="me-1 text-warning" />
              {boat.city}, {boat.country}
            </span>
          </div>
        </div>

        <div className="text-end">
          <div className="rating mb-2">
            <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
            <span className="fw-semibold">{boat.rating}</span>
            <span className="text-muted ms-1">(24 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatHeader;
