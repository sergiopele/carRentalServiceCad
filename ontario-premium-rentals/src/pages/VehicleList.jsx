import React, { useState, useMemo } from 'react';
import '../styles/VehicleList.css';
import VehicleFilter from '../components/VehicleFilter';

const VEHICLES = [
  {
    name: 'BMW 5 Series',
    description: 'Luxury sedan with premium features',
    price: 129,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mercedes-Benz E-Class',
    description: 'Elegant and comfortable ride',
    price: 149,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Audi A6',
    description: 'Smooth drive and cutting-edge tech',
    price: 139,
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80',
  },
];

export default function VehicleList() {
  const [sortBy, setSortBy] = useState('');

  const sortedVehicles = useMemo(() => {
    const sorted = [...VEHICLES];
    switch (sortBy) {
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [sortBy]);

  return (
    <main className="vehicle-list-page">
      <header className="vehicle-list-header">
        <h1>All Vehicles</h1>
        <p>Explore our full fleet of luxury and premium vehicles available across Ontario.</p>
      </header>

      <div className="vehicles-container">
        <VehicleFilter onSortChange={setSortBy} />
      </div>

      <section className="vehicle-list-grid">
        {sortedVehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-list-card">
            <div className="vehicle-list-image-placeholder">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
            </div>
            <div className="vehicle-list-details">
              <h3>{vehicle.name}</h3>
              <p>{vehicle.description}</p>
              <p><strong>${vehicle.price}</strong> / day</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}