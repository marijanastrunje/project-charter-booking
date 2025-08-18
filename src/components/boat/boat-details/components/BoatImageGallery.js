import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BoatImageGallery = ({ boat }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock dodatne slike za galeriju
  const galleryImages = [
    boat.img,
    'https://placehold.co/800x600?text=Interior+View',
    'https://placehold.co/800x600?text=Deck+View',
    'https://placehold.co/800x600?text=Captain+Area',
    'https://placehold.co/800x600?text=Luxury+Details',
    'https://placehold.co/800x600?text=Sunset+Cruise',
  ];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
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
  );
};

export default BoatImageGallery;
