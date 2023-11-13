import React from "react";
import { useRealEstate } from '../../context/RealEstateContext';
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./Home.scss";

const Home = () => {
  const { state } = useRealEstate();

  return (
    <div className='home'>
      <h1 className='home__title'>Inmuebles</h1>
      <div className='home__wrapper'>
        {state.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
