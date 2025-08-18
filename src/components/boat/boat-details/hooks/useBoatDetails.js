import {
  faWifi,
  faAnchor,
  faLifeRing,
  faMusic,
  faSnowflake,
  faTv,
  faUtensils,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

export const useBoatDetails = (boat) => {
  const boatDetails = {
    ...boat,
    year: 2020,
    engine: '2x 350 HP',
    fuel: 'Gasoline',
    cabins: 2,
    bathrooms: 1,
    description:
      'Experience luxury sailing with our premium yacht. Perfect for day trips, sunset cruises, and special celebrations. This beautiful vessel combines comfort, style, and performance for an unforgettable maritime adventure.',
    amenities: [
      { icon: faWifi, name: 'Free WiFi' },
      { icon: faAnchor, name: 'Anchor' },
      { icon: faLifeRing, name: 'Safety Equipment' },
      { icon: faMusic, name: 'Sound System' },
      { icon: faSnowflake, name: 'Air Conditioning' },
      { icon: faTv, name: 'Entertainment System' },
      { icon: faUtensils, name: 'Kitchen Facilities' },
      { icon: faShieldAlt, name: 'Insurance Included' },
    ],
    included: [
      'Professional Captain',
      'Fuel for 4 hours',
      'Safety Equipment',
      'Insurance',
      'Welcome Drinks',
      'Snorkeling Equipment',
    ],
    notIncluded: ['Food & Additional Drinks', 'Port Fees', 'Fuel for extra hours', 'Gratuities'],
  };

  return boatDetails;
};
