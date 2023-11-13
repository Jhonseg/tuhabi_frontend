import React, { useState } from 'react';

const FilterComponent = ({ onFilterSubmit }) => {
  const [filters, setFilters] = useState({
    address: '',
    city: '',
    price: '',
    description: '',
    year: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Address:
        <input type="text" name="address" value={filters.address} onChange={handleInputChange} />
      </label>

      <label>
        City:
        <input type="text" name="city" value={filters.city} onChange={handleInputChange} />
      </label>

      <button type="submit">Filtrar</button>
    </form>
  );
};

export default FilterComponent;