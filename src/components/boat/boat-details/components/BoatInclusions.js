import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BoatInclusions = ({ included, notIncluded }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <h3 className="h6 fw-semibold mb-3 text-success">✓ What's Included</h3>
        <ul className="list-unstyled">
          {included.map((item, index) => (
            <li key={index} className="mb-2">
              <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h3 className="h6 fw-semibold mb-3 text-muted">Not Included</h3>
        <ul className="list-unstyled text-muted">
          {notIncluded.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="me-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BoatInclusions;
