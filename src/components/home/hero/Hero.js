import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section px-4 py-5 mb-5 text-center">
      <meta name="keywords" content="yacht rental, boat charter, luxury yachts, Croatia sailing" />
      <h1 className="display-5 fw-bold text-white hero-text position-relative">Centered hero</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead text-white position-relative mb-4">
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
          most popular front-end open source toolkit.
        </p>
      </div>
    </section>
  );
};

export default Hero;
