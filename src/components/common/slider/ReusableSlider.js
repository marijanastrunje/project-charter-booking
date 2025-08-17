import Slider from 'react-slick';
import './ReusableSlider.css';

const ReusableSlider = ({
  items = [],
  loading = false,
  renderItem,
  emptyMessage = 'No items found.',
  loadingMessage = 'Loading…',
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3.5, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2.3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1.5, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return <div className="text-center py-4">{loadingMessage}</div>;
  }

  if (!items || items.length === 0) {
    return <div className="text-center py-4">{emptyMessage}</div>;
  }

  return (
    <div className="container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id || index}>{renderItem(item)}</div>
        ))}
      </Slider>
    </div>
  );
};

export default ReusableSlider;
