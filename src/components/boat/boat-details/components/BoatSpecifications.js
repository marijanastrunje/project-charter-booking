const BoatSpecifications = ({ boatDetails }) => {
  return (
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
  );
};

export default BoatSpecifications;
