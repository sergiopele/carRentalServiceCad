import '../styles/Testimonials.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <p className="testimonials-subtitle">
          Hear from travelers who've experienced our premium service
        </p>
        <div className="testimonials-grid">
          <TestimonialCard
            name="Sarah J."
            image="https://randomuser.me/api/portraits/women/43.jpg"
            rating={5}
            text="Renting from Stratos Fleet was seamless. The BMW 5 Series was immaculate and made my business trip much more enjoyable. Will definitely use them again!"
          />
          <TestimonialCard
            name="Michael T."
            image="https://randomuser.me/api/portraits/men/32.jpg"
            rating={5}
            text="Exceptional service from start to finish. The Audi A6 was perfect for our family vacation. The pickup at Pearson Airport was quick and the staff was very professional."
          />
          <TestimonialCard
            name="Jennifer L."
            image="https://randomuser.me/api/portraits/women/65.jpg"
            rating={4.5}
            text="I've rented from many companies, but Stratos Fleet stands out. The Mercedes was in perfect condition and the pricing was transparent with no surprises."
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, image, rating, text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
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
        </div>
      </div>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
}