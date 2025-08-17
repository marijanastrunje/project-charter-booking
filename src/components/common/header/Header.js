import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faAnchor } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Top Bar - SEO */}
      <title>YACHTERA - Premium Yacht Charter & Rental Services</title>
      <meta
        name="description"
        content="Rent luxury yachts in Croatia. Premium charter services with professional crew. Book your perfect sailing experience today."
      />

      {/* Top Bar - kontakt info */}
      <div className="bg-secondary text-white py-2">
        <div className="container">
          <div className="row" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="YACHTERA" />
            <meta itemProp="url" content="https://yachtera.com" />
            <meta itemProp="telephone" content="+385991231212" />
            <meta itemProp="email" content="support@yachtera.com" />

            <div className="col-12 col-sm-8">
              <small>
                <FontAwesomeIcon icon={faPhone} className="me-1" />
                <a
                  href="tel:+385991231212"
                  aria-label="Call us for more details"
                  className="text-white text-decoration-none me-3"
                >
                  +385991231212
                </a>
              </small>
              <small>
                <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                <a
                  href="mailto:support@booking.com"
                  aria-label="Email us for more details"
                  className="text-white text-decoration-none"
                >
                  support@booking.com
                </a>
              </small>
            </div>
            <div className="d-none d-sm-block col-sm-4 text-end">
              <small>link ili sn ikona</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light shadow-sm sticky-top"
        role="navigation"
      >
        <div className="container">
          {/* Logo/Brand */}
          <a
            className="navbar-brand d-flex align-items-center"
            href="/"
            aria-label="NAZIV TVRTKE - Homepage"
          >
            <FontAwesomeIcon icon={faAnchor} className="text-primary me-2 fs-4" />
            <span className="fw-bold text-primary fs-4">LOGO</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" href="/" aria-current="page">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pages">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li>
            </ul>

            {/* Book Now Button */}
            <div className="d-flex">
              <a
                href="/book"
                className="btn btn-primary-custom rounded-pill px-4 py-2 fw-semibold"
                role="button"
                aria-label="Book yacht now"
              >
                Book here
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
