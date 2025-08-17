import Slider from 'react-slick';
import BoatCard from '../boat-cards/BoatCard';
import { boats as defaultBoats } from '../../../data/data';

const BoatSlider = ({ boats = defaultBoats, loading = false }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return <div className="text-center py-4">Loading…</div>;
  }

  if (!boats || boats.length === 0) {
    return <div className="text-center py-4">No boats found.</div>;
  }

  return (
    <div className="container">
      <Slider {...settings}>
        {boats.map((boat) => (
          <div key={boat.id}>
            <BoatCard boat={boat} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BoatSlider;
