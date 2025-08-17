import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-12 col-lg-4 mb-5 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <FontAwesomeIcon
                icon={faAnchor}
                className="text-primary me-2 fs-4"
                aria-hidden="true"
              />
              <span className="fw-bold  fs-4">LOGO</span>
            </div>
            <p className="px-2">
              Ivana Meštrovića 35, Grad
              <br />
              Phone: <a href="tel:+385991231212">+385991231212</a>
              <br />
              E-mail: <a href="mailto:support@booking.com">support@booking.com</a>
              <br />
              OIB: 123456789
              <br />
              IBAN: HR911133665555555
            </p>
          </div>

          {/* Company Links */}
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-6 col-lg-4 mb-4 text-center text-md-start">
                <h6 className="fw-bold  mb-3">Company</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="/about">About us</a>
                  </li>
                  <li className="mb-2">
                    <a href="/services">Services</a>
                  </li>
                  <li className="mb-2">
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Help Links */}
              <div className="col-6 col-lg-4 text-center text-md-start">
                <h6 className="fw-bold  mb-3">Help</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/support">Customer Support</a>
                  </li>
                  <li className="mb-2">
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li className="mb-2">
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-12 col-lg-4 mb-4 mb-md-0">
                <h5 className="mb-3">Subscribe to our newsletter</h5>
                <form className="text-center text-md-start">
                  <input
                    type="email"
                    className="form-control me-2 mb-3"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-secondary my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className=" mb-2">Copyright © 2024 Yachtera. All rights reserved.</p>
            <div className="icons text-center">
              <a
                href="https://facebook.com/nazivtvrtke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://instagram.com/nazivtvrtke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://youtube.com/nazivtvrtke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
