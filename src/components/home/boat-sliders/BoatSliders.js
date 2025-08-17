import BoatSlider from '../../boat/boat-slider/BoatSlider';
import { Link } from 'react-router-dom';

const BoatSliders = () => {
  return (
    <section className="boat-sliders-section">
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Link to="/">
            <h2 className="mb-0 text-start">Boat category 1</h2>
          </Link>
          <Link to="/" className="mt-md-1">
            View more
          </Link>
        </div>
        <BoatSlider />
        <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
          <Link to="/">
            <h2 className="mb-0 text-start">Boat category 2</h2>
          </Link>
          <Link to="/" className="mt-md-1">
            View more
          </Link>
        </div>
        <BoatSlider />
        <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
          <Link to="/">
            <h2 className="mb-0 text-start">Boat category 3</h2>
          </Link>
          <Link to="/" className="mt-md-1">
            View more
          </Link>
        </div>
        <BoatSlider />
      </div>
    </section>
  );
};

export default BoatSliders;
