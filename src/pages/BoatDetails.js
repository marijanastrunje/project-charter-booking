import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { boats } from '../data/data';
import BoatSlider from '../components/boat/boat-slider/BoatSlider';
import BoatImageGallery from '../components/boat/boat-details/components/BoatImageGallery';
import BoatHeader from '../components/boat/boat-details/components/BoatHeader';
import BoatSpecifications from '../components/boat/boat-details/components/BoatSpecifications';
import BoatAmenities from '../components/boat/boat-details/components/BoatAmenities';
import BoatInclusions from '../components/boat/boat-details/components/BoatInclusions';
import BoatBookingCard from '../components/boat/boat-details/components/BoatBookingCard';
import BoatBreadcrumb from '../components/boat/boat-details/components/BoatBreadCrumb';
import { useBoatDetails } from '../components/boat/boat-details/hooks/useBoatDetails';
import './BoatDetails.css';

const BoatDetails = () => {
  const { id } = useParams();
  const boat = boats.find((b) => b.id === parseInt(id));
  const boatDetails = useBoatDetails(boat);

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

  // Preporučeni brodovi (svi osim trenutnog)
  const recommendedBoats = boats.filter((b) => b.id !== boat.id).slice(0, 4);

  return (
    <div className="boat-details-page">
      {/* Breadcrumb */}
      <BoatBreadcrumb boat={boat} />

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
            <BoatImageGallery boat={boat} />

            {/* Boat Header Info */}
            <BoatHeader boat={boat} />

            {/* Description */}
            <div className="boat-description mb-4">
              <h3 className="h5 fw-semibold mb-3">About this boat</h3>
              <p className="text-muted">{boatDetails.description}</p>
            </div>

            {/* Specifications */}
            <BoatSpecifications boatDetails={boatDetails} />

            {/* Amenities */}
            <BoatAmenities amenities={boatDetails.amenities} />

            {/* What's Included */}
            <BoatInclusions included={boatDetails.included} notIncluded={boatDetails.notIncluded} />
          </div>

          {/* Right Column - Booking Form */}
          <div className="col-12 col-lg-4">
            <BoatBookingCard boat={boat} />
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
