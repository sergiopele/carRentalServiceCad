import { useState } from 'react';
import '../styles/Locations.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Locations() {
  const [mapSrc, setMapSrc] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28879.58239597442!2d-79.4063078!3d43.6534812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9b1c35e223%3A0xd0210e8d1fd7b39e!2sDowntown%20Toronto%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1689990000000!5m2!1sen!2sca'
  );

  const mapUrls = {
    Toronto:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28879.58239597442!2d-79.4063078!3d43.6534812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9b1c35e223%3A0xd0210e8d1fd7b39e!2sDowntown%20Toronto%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1689990000000!5m2!1sen!2sca',
    Ottawa:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27969.44262039941!2d-75.697933!3d45.4215296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04f8335951ab%3A0x88a401c0b7bc91f2!2sDowntown%20Ottawa%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1689990111111!5m2!1sen!2sca',
    Hamilton:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28832.181763543875!2d-79.8722381!3d43.2557205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b83e1b21f5d%3A0x49e5de8331f2e5dc!2sDowntown%20Hamilton%2C%20Hamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1689990222222!5m2!1sen!2sca',
    London:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28887.292783317225!2d-81.252129!3d42.983379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef38b09d260b1%3A0x51f15bc1326cb66d!2sDowntown%20London%2C%20London%2C%20ON!5e0!3m2!1sen!2sca!4v1689990333333!5m2!1sen!2sca',
  };

  const updateMap = (city) => {
    setMapSrc(mapUrls[city]);
  };

  return (
    <section className="locations-section" id="locations">
      <div className="locations-container">
        <h2 className="locations-title">Our Ontario Locations</h2>
        <p className="locations-subtitle">
          We serve all major cities across Ontario with convenient pickup locations
        </p>
        <div className="locations-grid">
          <div className="map-wrapper">
            <iframe
              title="Google Map"
              src={mapSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-cards">
            {Object.entries(mapUrls).map(([city, url]) => (
              <LocationCard
                key={city}
                city={city}
                desc={
                  city === 'Toronto'
                    ? 'Downtown & Pearson Airport'
                    : city === 'Ottawa'
                    ? 'Downtown & International Airport'
                    : city === 'Hamilton'
                    ? 'City Center & Airport'
                    : 'Downtown & Airport'
                }
                count={
                  city === 'Toronto'
                    ? '15+'
                    : city === 'Ottawa'
                    ? '12+'
                    : city === 'Hamilton'
                    ? '8+'
                    : '6+'
                }
                isActive={mapSrc === url}
                onClick={updateMap}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard({ city, desc, count, onClick, isActive }) {
  return (
    <div
      className={`location-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(city)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(city)}
      title={`Click to view ${city} on map`}
    >
      <h3>
        <i className="fas fa-map-pin"></i> {city}
      </h3>
      <p>{desc}</p>
      <span>{count} vehicles available</span>
    </div>
  );
}