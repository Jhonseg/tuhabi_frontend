import React from 'react';
import { useParams } from 'react-router-dom';
import { useRealEstate } from '../../context/RealEstateContext';
import { Link } from "react-router-dom";
import './PropertyDetail.scss'

const PropertyDetail = () => {
  const { id } = useParams();
  const { state } = useRealEstate();

  const selectedProperty = state.find(property => property.id === Number(id));

  if (!selectedProperty) {
    return <div>No se encontró la propiedad.</div>;
  }

  const formatPrice = (price) => {
    if(!price){
      return ''
    }

    return price.toLocaleString();
  }

  const formatStatus = (status) => {
    if(!status){
      return ''
    }

    return status.split('_').join(' ');
  }

  return (
    <div className='propertyDetail'>
      <Link to={`/`}>Volver</Link>
      <h1 className='propertyDetail__title'>Detalles de la propiedad en {selectedProperty.city}</h1>
      <p className='propertyDetail__address'>{selectedProperty.address}</p>
      <div>
        <p>Precio total (COP)</p>
        <p className='propertyDetail__price'>$ {formatPrice(selectedProperty.price)}</p>
      </div>
      <div className='propertyDetail__imgWrapper'>
        <img className='propertyDetail__img' src='https://d3hzflklh28tts.cloudfront.net/venta-ygygdmmerp-2-414.png?d=400x400' alt={selectedProperty.address} />
      </div>
      <p>Año {selectedProperty.year}</p>
      <p>Estado {formatStatus(selectedProperty.status)}</p>
    </div>
  );
};

export default PropertyDetail;