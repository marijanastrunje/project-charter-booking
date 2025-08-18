import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// stilovi dolaze gotovi
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ReusableSlider.css';

const ReusableSlider = ({
  items = [],
  loading = false,
  renderItem,
  emptyMessage = 'No items found.',
  loadingMessage = 'Loading…',
}) => {
  if (loading) return <div className="text-center py-4">{loadingMessage}</div>;
  if (!items?.length) return <div className="text-center py-4">{emptyMessage}</div>;

  return (
    <div className="container">
      <Swiper
        className="custom-swiper"
        modules={[Pagination]}
        navigation={false}
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          1200: { slidesPerView: 3.5, slidesPerGroup: 2 },
          992: { slidesPerView: 3, slidesPerGroup: 2 },
          768: { slidesPerView: 2.3, slidesPerGroup: 1 },
          0: { slidesPerView: 1.2, slidesPerGroup: 1, speed: 500, loop: true },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item?.id ?? index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableSlider;
