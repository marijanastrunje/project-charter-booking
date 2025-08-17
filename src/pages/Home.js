import Hero from '../components/home/hero/Hero';
import BookingFilter from '../components/home/booking-filter/BookingFilter';
import BoatCardsGrid from '../components/boat/boat-cards/BoatCardsFilterGrid';
import BoatSlider from '../components/boat/boat-slider/BoatSlider';
import AboutSection from '../components/home/about/AboutSection';
import LatestArticles from '../components/home/news/LatestArticles';

const Home = () => {
  return (
    <div>
      <Hero />
      <BookingFilter />
      <BoatCardsGrid />
      <BoatSlider />
      <AboutSection />
      <LatestArticles />
    </div>
  );
};

export default Home;
