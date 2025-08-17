import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageGallery = ({ images, alt = 'Image' }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div className="text-center text-muted">No images available</div>;
  }

  return (
    <div className="image-gallery mb-4">
      <div className="main-image-container position-relative">
        <img
          src={images[activeImageIndex]}
          alt={`${alt} ${activeImageIndex + 1}`}
          className="main-image img-fluid rounded-4"
        />

        {images.length > 1 && (
          <>
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

            <div className="position-absolute gallery-counter">
              {activeImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="row g-2 mt-3">
          {images.map((img, index) => (
            <div key={index} className="col-3">
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
      )}
    </div>
  );
};

export default ImageGallery;
