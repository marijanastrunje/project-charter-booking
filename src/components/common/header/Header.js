import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faAnchor } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'bootstrap/js/dist/collapse';
import './Header.css';

const Header = () => {
  const navRef = useRef(null); // .navbar-collapse
  const togglerRef = useRef(null); // gumb (hamburger)
  const collapseRef = useRef(null); // Bootstrap Collapse instanca

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    // Inicijaliziraj Collapse bez auto-togglea
    collapseRef.current = Collapse.getOrCreateInstance(navEl, { toggle: false });

    const onDocClick = (e) => {
      if (!navEl.classList.contains('show')) return;
      const clickInsideNav = navEl.contains(e.target);
      const clickOnToggler = togglerRef.current?.contains(e.target);
      if (!clickInsideNav && !clickOnToggler) {
        collapseRef.current?.hide();
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape' && navEl.classList.contains('show')) {
        collapseRef.current?.hide();
      }
    };

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handleTogglerClick = () => {
    collapseRef.current?.toggle(); // garantira otvori/zatvori na svaki klik
  };

  // (opcionalno) zatvori nakon klika na link u meniju (korisno na mobitelu)
  const handleNavClick = (e) => {
    const isLink = e.target.closest('a');
    if (isLink && navRef.current?.classList.contains('show')) {
      collapseRef.current?.hide();
    }
  };

  return (
    <header>
      {/* Top Bar - SEO */}
      <title>YACHTERA - Premium Yacht Charter & Rental Services</title>
      <meta
        name="description"
        content="Rent luxury yachts in Croatia. Premium charter services with professional crew. Book your perfect sailing experience today."
      />

      {/* Top Bar - kontakt info */}
      <div className="topbar bg-secondary text-white py-2">
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
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm" role="navigation">
        <div className="container">
          {/* Logo/Brand */}
          <a className="navbar-brand d-flex align-items-center" href="/" aria-label="Homepage">
            <FontAwesomeIcon icon={faAnchor} className="text-primary me-2 fs-4" />
            <span className="fw-bold text-primary fs-4">LOGO</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            ref={togglerRef}
            className="navbar-toggler border-0"
            type="button"
            aria-controls="mainNavigation"
            aria-expanded={navRef.current?.classList.contains('show') ? 'true' : 'false'}
            aria-label="Toggle navigation menu"
            onClick={handleTogglerClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse"
            id="mainNavigation"
            ref={navRef}
            onClick={handleNavClick}
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" href="/" aria-current="page">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  PAGES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
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
