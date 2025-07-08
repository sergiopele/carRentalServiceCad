import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/vehicles');
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Visit Ontario And<br />Experience World-Class Drives</h1>
          <p>
            Cruise the scenic roads of Ontario with our luxury rentals. Adventure and elegance at your fingertips.
          </p>
          <button onClick={handleExploreClick} className="hero-btn">Explore Ontario</button>
        </div>
      </div>
    </section>
  );
}