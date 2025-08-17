// src/components/boat/boat-slider/BoatSlider.js
import BoatCard from '../boat-cards/BoatCard';
import ReusableSlider from '../../common/slider/ReusableSlider';
import { boats as defaultBoats } from '../../../data/data';

const BoatSlider = ({ boats = defaultBoats, loading = false }) => {
  // Render funkcija za boat card
  const renderBoatCard = (boat) => <BoatCard boat={boat} />;

  return (
    <ReusableSlider
      items={boats}
      loading={loading}
      renderItem={renderBoatCard}
      emptyMessage="No boats found."
      loadingMessage="Loading boats..."
    />
  );
};

export default BoatSlider;
