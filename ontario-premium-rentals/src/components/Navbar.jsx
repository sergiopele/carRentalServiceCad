import { useState } from 'react';
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Stratos Fleet</div>
        <div className="navbar-links desktop-only">
          <a href="#vehicles">Vehicles</a>
          <a href="#locations">Locations</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonials">Testimonials</a>
          <button className="book-now">Book Now</button>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <a href="#vehicles" onClick={toggleMobileMenu}>Vehicles</a>
        <a href="#locations" onClick={toggleMobileMenu}>Locations</a>
        <a href="#why-us" onClick={toggleMobileMenu}>Why Us</a>
        <a href="#testimonials" onClick={toggleMobileMenu}>Testimonials</a>
        <button className="book-now">Book Now</button>
      </div>
    </nav>
  );
}