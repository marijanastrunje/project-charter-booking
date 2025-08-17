import Hero from '../components/home/hero/Hero';
import BookingFilter from '../components/home/booking-filter/BookingFilter';
import BoatCardsGrid from '../components/boat/boat-cards/BoatCardsFilterGrid';
import BoatSliders from '../components/home/boat-sliders/BoatSliders';
import AboutSection from '../components/home/about/AboutSection';
import LatestArticles from '../components/home/news/LatestArticles';

const Home = () => {
  return (
    <div>
      <Hero />
      <BookingFilter />
      <BoatCardsGrid />
      <BoatSliders />
      <AboutSection />
      <LatestArticles />
    </div>
  );
};

export default Home;
