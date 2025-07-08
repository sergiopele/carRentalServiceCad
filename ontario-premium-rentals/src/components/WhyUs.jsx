import '../styles/WhyUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function WhyUs() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="why-us-container">
        <h2 className="why-us-title">Why Choose Ontario Premium Rentals</h2>
        <div className="why-us-grid">
          <div className="why-us-card">
            <div className="icon-circle">
              <i className="fas fa-car"></i>
            </div>
            <h3>Premium Cars</h3>
            <p>
              Our fleet consists of only the finest luxury and premium vehicles,
              meticulously maintained for your comfort and safety.
            </p>
          </div>
          <div className="why-us-card">
            <div className="icon-circle">
              <i className="fas fa-tag"></i>
            </div>
            <h3>Transparent Pricing</h3>
            <p>
              No hidden fees or surprises. Our all-inclusive pricing means you
              know exactly what you're paying for.
            </p>
          </div>
          <div className="why-us-card">
            <div className="icon-circle">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Instant Booking</h3>
            <p>
              Book your dream car in seconds with our streamlined online
              reservation system available 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}