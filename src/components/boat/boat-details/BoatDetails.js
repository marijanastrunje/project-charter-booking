// src/pages/BoatDetails.js
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRulerCombined,
  faUsers,
  faClock,
  faLocationDot,
  faStar,
  faWifi,
  faAnchor,
  faLifeRing,
  faMusic,
  faSnowflake,
  faTv,
  faUtensils,
  faPhone,
  faEnvelope,
  faCalendarDays,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faCheck,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { boats } from '../../../data/data';
import BoatSlider from '../boat-slider/BoatSlider';
import InfoChip from '../../common/InfoChip';
import './BoatDetails.css';

const BoatDetails = () => {
  const { id } = useParams();
  const boat = boats.find((b) => b.id === parseInt(id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [guests, setGuests] = useState(boat?.guests || 6);

  if (!boat) {
    return (
      <div className="container my-5 text-center">
        <h2>Boat not found</h2>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  // Mock dodatne slike za galeriju
  const galleryImages = [
    boat.img,
    'https://placehold.co/800x600?text=Interior+View',
    'https://placehold.co/800x600?text=Deck+View',
    'https://placehold.co/800x600?text=Captain+Area',
    'https://placehold.co/800x600?text=Luxury+Details',
    'https://placehold.co/800x600?text=Sunset+Cruise',
  ];

  // Mock dodatni podaci
  const boatDetails = {
    ...boat,
    year: 2020,
    engine: '2x 350 HP',
    fuel: 'Gasoline',
    cabins: 2,
    bathrooms: 1,
    description:
      'Experience luxury sailing with our premium yacht. Perfect for day trips, sunset cruises, and special celebrations. This beautiful vessel combines comfort, style, and performance for an unforgettable maritime adventure.',
    amenities: [
      { icon: faWifi, name: 'Free WiFi' },
      { icon: faAnchor, name: 'Anchor' },
      { icon: faLifeRing, name: 'Safety Equipment' },
      { icon: faMusic, name: 'Sound System' },
      { icon: faSnowflake, name: 'Air Conditioning' },
      { icon: faTv, name: 'Entertainment System' },
      { icon: faUtensils, name: 'Kitchen Facilities' },
      { icon: faShieldAlt, name: 'Insurance Included' },
    ],
    included: [
      'Professional Captain',
      'Fuel for 4 hours',
      'Safety Equipment',
      'Insurance',
      'Welcome Drinks',
      'Snorkeling Equipment',
    ],
    notIncluded: ['Food & Additional Drinks', 'Port Fees', 'Fuel for extra hours', 'Gratuities'],
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const calculateTotal = () => {
    const basePrice = boat.price;
    const guestExtra = Math.max(0, guests - boat.guests) * 50; // $50 per extra guest
    return basePrice + guestExtra;
  };

  // Preporučeni brodovi (svi osim trenutnog)
  const recommendedBoats = boats.filter((b) => b.id !== boat.id).slice(0, 4);

  return (
    <div className="boat-details-page">
      {/* Breadcrumb */}
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/boats">Boats</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {boat.brand} {boat.name}
            </li>
          </ol>
        </nav>
      </div>

      {/* Back Button */}
      <div className="container">
        <Link to="/" className="btn btn-outline-secondary mb-4">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Boats
        </Link>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Images and Details */}
          <div className="col-12 col-lg-8">
            {/* Main Image Gallery */}
            <div className="image-gallery mb-4">
              <div className="main-image-container position-relative">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${boat.brand} ${boat.name}`}
                  className="main-image img-fluid rounded-4"
                />

                {/* Navigation Arrows */}
                <button
                  className="btn btn-primary position-absolute gallery-nav gallery-nav-prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="btn btn-primary position-absolute gallery-nav gallery-nav-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>

                {/* Image Counter */}
                <div className="position-absolute gallery-counter">
                  {activeImageIndex + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="thumbnail-nav mt-3">
                <div className="row g-2">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="col-2">
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail img-fluid rounded ${
                          index === activeImageIndex ? 'active' : ''
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Boat Header Info */}
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

            {/* Description */}
            <div className="boat-description mb-4">
              <h3 className="h5 fw-semibold mb-3">About this boat</h3>
              <p className="text-muted">{boatDetails.description}</p>
            </div>

            {/* Specifications */}
            <div className="boat-specs mb-4">
              <h3 className="h5 fw-semibold mb-3">Specifications</h3>
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <div className="spec-item">
                    <div className="spec-label text-muted small">Year</div>
                    <div className="spec-value fw-semibold">{boatDetails.year}</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="spec-item">
                    <div className="spec-label text-muted small">Engine</div>
                    <div className="spec-value fw-semibold">{boatDetails.engine}</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="spec-item">
                    <div className="spec-label text-muted small">Cabins</div>
                    <div className="spec-value fw-semibold">{boatDetails.cabins}</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="spec-item">
                    <div className="spec-label text-muted small">Bathrooms</div>
                    <div className="spec-value fw-semibold">{boatDetails.bathrooms}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="boat-amenities mb-4">
              <h3 className="h5 fw-semibold mb-3">Amenities</h3>
              <div className="row g-3">
                {boatDetails.amenities.map((amenity, index) => (
                  <div key={index} className="col-6 col-lg-4">
                    <div className="amenity-item d-flex align-items-center">
                      <FontAwesomeIcon icon={amenity.icon} className="text-primary me-2" />
                      <span>{amenity.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="row mb-4">
              <div className="col-md-6">
                <h3 className="h6 fw-semibold mb-3 text-success">✓ What's Included</h3>
                <ul className="list-unstyled">
                  {boatDetails.included.map((item, index) => (
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
                  {boatDetails.notIncluded.map((item, index) => (
                    <li key={index} className="mb-2">
                      <span className="me-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="col-12 col-lg-4">
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

                <form className="booking-form">
                  {/* Date Selection */}
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
                      />
                    </div>
                  </div>

                  {/* Time Selection */}
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

                  {/* Guest Count */}
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
                      <small className="text-warning">
                        Additional fee applies for extra guests
                      </small>
                    )}
                  </div>

                  {/* Book Button */}
                  <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                    Book Now - ${calculateTotal()}
                  </button>

                  <div className="text-center">
                    <small className="text-muted">Free cancellation up to 24 hours before</small>
                  </div>
                </form>

                {/* Contact Info */}
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
          </div>
        </div>

        {/* Recommended Boats */}
        {recommendedBoats.length > 0 && (
          <section className="recommended-boats mt-5">
            <h3 className="h4 fw-semibold mb-4">You might also like</h3>
            <BoatSlider boats={recommendedBoats} />
          </section>
        )}
      </div>
    </div>
  );
};

export default BoatDetails;
