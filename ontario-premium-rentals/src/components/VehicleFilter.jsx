import React, { useState } from 'react';
import '../styles/VehicleFilter.css';

export default function VehicleFilter({ onSortChange }) {
  const [sortBy, setSortBy] = useState('');

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    if (onSortChange) onSortChange(value);
  };

  return (
    <div className="vehicle-filter">
      <span className="filter-label">Filtering by:</span>
      <div className="sort-dropdown">
        <label htmlFor="sort-select" className="sr-only">Sort by</label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={handleSort}
          className="dropdown-toggle"
        >
          <option value="">Sort by</option>
          <option value="name-asc">Name (A–Z)</option>
          <option value="name-desc">Name (Z–A)</option>
          <option value="price-asc">Lowest price</option>
          <option value="price-desc">Highest price</option>
        </select>
      </div>
    </div>
  );
}