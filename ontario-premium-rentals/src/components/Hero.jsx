import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            🚗 Drive Ontario in Style <br />
            with Premium Rentals
          </h1>
          <p>
            Experience top-tier service and a premium fleet of luxury and performance cars across Ontario.
          </p>
          <a href="#vehicles" className="hero-btn">Explore Rentals</a>
        </div>
        <div className="hero-image">
          <img src="/hero-car.png" alt="Luxury car" />
        </div>
      </div>
    </section>
  );
}