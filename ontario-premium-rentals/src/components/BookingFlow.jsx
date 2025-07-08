import '../styles/BookingFlow.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function BookingFlow() {
  return (
    <section className="booking-section">
      <div className="booking-container">
        <h2 className="booking-title">Simple Booking Process</h2>
        <p className="booking-subtitle">
          Rent your dream car in just three easy steps
        </p>
        <div className="booking-grid">
          <BookingStep
            icon="fa-map-marker-alt"
            title="1. Select Location"
            desc="Choose from our multiple pickup locations across Ontario's major cities."
          />
          <BookingStep
            icon="fa-car"
            title="2. Choose Vehicle"
            desc="Select from our premium fleet based on your preferences and needs."
          />
          <BookingStep
            icon="fa-credit-card"
            title="3. Confirm & Pay"
            desc="Secure your booking with our fast and secure payment system."
          />
        </div>
        <div className="booking-cta">
          <button className="booking-button">Start Your Booking</button>
        </div>
      </div>
    </section>
  );
}

function BookingStep({ icon, title, desc }) {
  return (
    <div className="booking-step">
      <div className="step-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}