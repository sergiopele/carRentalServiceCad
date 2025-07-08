import { useNavigate } from 'react-router-dom';
import '../styles/FeaturedVehicles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FeaturedVehicles() {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/vehicles');
  };

  return (
    <section className="featured-vehicles-section" id="vehicles">
      <div className="vehicles-container">
        <h2 className="vehicles-title">Featured Vehicles</h2>
        <p className="vehicles-subtitle">
          Choose from our curated selection of premium vehicles available across Ontario
        </p>
        <div className="vehicle-grid">
          <VehicleCard
            title="BMW 5 Series"
            rating={5}
            reviews="128"
            price="129"
            image="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80"
          />
          <VehicleCard
            title="Mercedes-Benz E-Class"
            rating={4.5}
            reviews="96"
            price="149"
            image="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
          />
          <VehicleCard
            title="Audi A6"
            rating={4.8}
            reviews="112"
            price="139"
            image="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="vehicles-footer">
          <button className="view-all-button" onClick={handleViewAllClick}>
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ title, rating, reviews, price, image }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={image} alt={title} />
      </div>
      <div className="vehicle-details">
        <h3>{title}</h3>
        <div className="vehicle-rating">
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`fas ${
                  i < Math.floor(rating)
                    ? 'fa-star'
                    : rating > i
                    ? 'fa-star-half-alt'
                    : 'fa-star'
                }`}
              ></i>
            ))}
          </div>
          <span>{rating} ({reviews})</span>
        </div>
        <div className="vehicle-pricing">
          <span>From </span>
          <span className="price">${price}</span>
          <span>/day</span>
        </div>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
}