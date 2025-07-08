import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3>Stratos Fleet</h3>
            <p>
              Stratos Fleet is Ontario's premier luxury car rental service, offering premium vehicles
              with exceptional customer service.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#vehicles">Vehicles</a></li>
              <li><a href="#locations">Locations</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p>info@ontrent.com</p>
            <p>+1 (416) 555-0199</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ontario Premium Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}