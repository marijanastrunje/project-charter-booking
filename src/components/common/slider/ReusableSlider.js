// src/components/common/slider/ReusableSlider.js
import Slider from 'react-slick';
import './ReusableSlider.css';

const ReusableSlider = ({
  items = [],
  loading = false,
  renderItem,
  sliderSettings = {},
  emptyMessage = 'No items found.',
  loadingMessage = 'Loading…',
}) => {
  // Default slider settings
  const defaultSettings = {
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

  // Merge default settings with custom settings
  const settings = { ...defaultSettings, ...sliderSettings };

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
