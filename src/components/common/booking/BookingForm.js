// src/components/common/booking/BookingForm.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faClock,
  faUsers,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const BookingForm = ({ boat, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [guests, setGuests] = useState(boat?.guests || 6);

  const calculateTotal = () => {
    const basePrice = boat.price;
    const guestExtra = Math.max(0, guests - boat.guests) * 50;
    return basePrice + guestExtra;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        date: selectedDate,
        time: selectedTime,
        guests: guests,
        total: calculateTotal(),
      });
    }
  };

  return (
    <div className="booking-card card border-0 shadow-sm rounded-4 sticky-top">
      <div className="card-body p-4">
        <div className="price-section mb-4">
          <div className="d-flex align-items-baseline">
            <span className="h3 fw-bold mb-0">${calculateTotal()}</span>
            <span className="text-muted ms-2">/ 4 hrs.</span>
          </div>
          {guests > boat.guests && (
            <small className="text-muted">
              Includes ${(guests - boat.guests) * 50} for extra guests
            </small>
          )}
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Date */}
          <div className="mb-3">
            <label className="form-label small text-muted">Date</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <input
                type="date"
                className="form-control"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          {/* Time */}
          <div className="mb-3">
            <label className="form-label small text-muted">Departure Time</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <select
                className="form-select"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="08:00">08:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="mb-4">
            <label className="form-label small text-muted">Number of Guests</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <select
                className="form-select"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Guest{i + 1 > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            {guests > boat.guests && (
              <small className="text-warning">Additional fee applies for extra guests</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
            Book Now - ${calculateTotal()}
          </button>

          <div className="text-center">
            <small className="text-muted">Free cancellation up to 24 hours before</small>
          </div>
        </form>

        {/* Contact */}
        <hr className="my-4" />
        <div className="contact-section">
          <h6 className="fw-semibold mb-3">Need Help?</h6>
          <div className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-primary me-2" />
            <a href="tel:+385991231212" className="text-decoration-none">
              +385 99 123 1212
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
            <a href="mailto:support@booking.com" className="text-decoration-none">
              support@booking.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
