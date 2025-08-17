// InfoChip.js - Komponenta za prikazivanje informacija u chip formatu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoChip = ({ icon, children }) => (
  <span className="badge rounded-pill bg-light text-body border me-2 mb-2">
    <FontAwesomeIcon icon={icon} className="me-1" />
    {children}
  </span>
);

export default InfoChip;
