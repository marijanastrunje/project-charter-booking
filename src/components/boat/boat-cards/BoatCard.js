import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRulerCombined,
  faUsers,
  faClock,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import InfoChip from '../../common/InfoChip';

const BoatCard = ({ boat }) => (
  <div className="card border-0 shadow-sm h-100 rounded-4">
    <img src={boat.img} className="card-img-top rounded-top-4" alt={`${boat.brand} ${boat.name}`} />

    <div className="card-body">
      <h6 className="mb-1 text-uppercase fw-bold">{boat.brand}</h6>
      {boat.name && <div className="text-muted small mb-2">{boat.name}</div>}

      {/* chips row */}
      <div className="mb-2">
        <InfoChip icon={faRulerCombined}>{boat.size}</InfoChip>
        <InfoChip icon={faUsers}>{boat.guests} Guests</InfoChip>
        <InfoChip icon={faClock}>{boat.duration}</InfoChip>
      </div>

      {/* location */}
      <div className="small mb-3">
        <span className="badge bg-white border text-body">
          <FontAwesomeIcon icon={faLocationDot} className="me-1 text-warning" />
          {boat.city}, {boat.country}
        </span>
      </div>

      {/* footer actions */}
      <div className="d-flex align-items-center gap-2">
        <span className="btn btn-dark btn-sm px-3">
          ${boat.price} <span className="opacity-75">/ 4 hrs.</span>
        </span>
        <button className="btn btn-outline-secondary btn-sm">More Info</button>
        <span className="ms-auto small text-muted">
          <FontAwesomeIcon icon={faStar} className="me-1 text-warning" />
          {boat.rating}
        </span>
      </div>
    </div>
  </div>
);

export default BoatCard;
