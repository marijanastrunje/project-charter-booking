import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSailboat,
  faRulerCombined,
  faCalendarDays,
  faClock,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import './BookingFilter.css';

const BookingFilter = () => {
  return (
    <section className="container booking-filter">
      <form className="bg-white shadow rounded-4 p-3 p-lg-4">
        <div className="row g-3 align-items-end">
          {/* Boat Type */}
          <div className="col-12 col-md-6 col-lg">
            <label className="form-label small text-muted mb-1">Boat Type</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faSailboat} />
              </span>
              <select className="form-select" aria-label="Select boat type" defaultValue="yacht">
                <option value="yacht">Yacht</option>
                <option value="sailboat">Sailboat</option>
                <option value="catamaran">Catamaran</option>
                <option value="motor">Motor Boat</option>
              </select>
            </div>
          </div>

          {/* Size */}
          <div className="col-12 col-md-6 col-lg">
            <label className="form-label small text-muted mb-1">Size</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faRulerCombined} />
              </span>
              <select className="form-select" aria-label="Select boat size" defaultValue="24-50">
                <option value="0-24">0–24 ft.</option>
                <option value="24-50">24 ft. – 50 ft.</option>
                <option value="50-80">50 ft. – 80 ft.</option>
                <option value="80+">80+ ft.</option>
              </select>
            </div>
          </div>

          {/* Check-in Date */}
          <div className="col-12 col-md-6 col-lg">
            <label className="form-label small text-muted mb-1">Check-in Date</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <input type="date" className="form-control" aria-label="Pick check-in date" />
            </div>
          </div>

          {/* Departure (time) */}
          <div className="col-12 col-md-6 col-lg">
            <label className="form-label small text-muted mb-1">Departure</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <input
                type="time"
                className="form-control"
                aria-label="Pick departure time"
                defaultValue="07:30"
              />
            </div>
          </div>

          {/* Occupancy */}
          <div className="col-12 col-md-6 col-lg">
            <label className="form-label small text-muted mb-1">Occupancy</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <select
                className="form-select"
                aria-label="Select number of guests"
                defaultValue="4-12"
              >
                <option value="1-4">1–4 Guests</option>
                <option value="4-12">4–12 Guests</option>
                <option value="12-20">12–20 Guests</option>
                <option value="20+">20+ Guests</option>
              </select>
            </div>
          </div>

          {/* CTA */}
          <div className="col-12 col-lg-auto">
            <button type="submit" className="btn btn-primary btn-lg w-100 rounded-3">
              Check Availability
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BookingFilter;
