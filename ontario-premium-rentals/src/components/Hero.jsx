import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Visit Ontario And<br />Experience World-Class Drives</h1>
          <p>
            Cruise the scenic roads of Ontario with our luxury rentals. Adventure and elegance at your fingertips.
          </p>
          <a href="#vehicles" className="hero-btn">Explore Ontario</a>
        </div>
      </div>
    </section>
  );
}