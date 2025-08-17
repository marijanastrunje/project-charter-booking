import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShip,
  faDharmachakra,
  faChampagneGlasses,
  faCompass,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <>
      {/* HERO */}
      <section className="about-section text-white d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <p className="about-subtitle text-uppercase mb-2">ABOUT CHARTER BOOKING</p>
              <h1 className="about-title fw-bold mb-3">
                Sail Away to <br /> Something Great
              </h1>
              <p className="about-description mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida.
              </p>

              <a href="/read-more" className="btn about-button">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="container py-4">
          <div className="row g-4">
            {/* 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <article className="service-card h-100 text-center">
                <div className="service-icon mb-3">
                  <FontAwesomeIcon icon={faShip} />
                </div>
                <h4 className="service-title mb-2">Luxury Yachts</h4>
                <p className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/" className="service-link">
                  READ MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2 service-chevron" />
                </a>
              </article>
            </div>

            {/* 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <article className="service-card h-100 text-center">
                <div className="service-icon mb-3">
                  <FontAwesomeIcon icon={faDharmachakra} />
                </div>
                <h4 className="service-title mb-2">Boats Rental</h4>
                <p className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/" className="service-link">
                  READ MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2 service-chevron" />
                </a>
              </article>
            </div>

            {/* 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <article className="service-card h-100 text-center">
                <div className="service-icon mb-3">
                  <FontAwesomeIcon icon={faChampagneGlasses} />
                </div>
                <h4 className="service-title mb-2">Party & Events</h4>
                <p className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/" className="service-link">
                  READ MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2 service-chevron" />
                </a>
              </article>
            </div>

            {/* 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <article className="service-card h-100 text-center">
                <div className="service-icon mb-3">
                  <FontAwesomeIcon icon={faCompass} />
                </div>
                <h4 className="service-title mb-2">Private Trips</h4>
                <p className="service-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="/" className="service-link">
                  READ MORE
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2 service-chevron" />
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
