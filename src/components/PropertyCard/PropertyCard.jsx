import React, { useState } from "react";
import "./PropertyCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(() => {
    const storedLiked = localStorage.getItem('propertiesLiked') || '{}'
    const storedParsed = JSON.parse(storedLiked)
    return !!storedParsed[property.id]
  });

  const handleLike = () => {
    setLiked(!liked);

    const propertiesLiked = localStorage.getItem('propertiesLiked') || '{}'
    const parseLikes = JSON.parse(propertiesLiked)

    if (!liked) {
      parseLikes[property.id] = true
    } else {
      delete parseLikes[property.id]
    }

    localStorage.setItem('propertiesLiked', JSON.stringify(parseLikes))

  };
  const handleClick  = () => {
    navigate(`/property/${property.id}`);
  };

  const formatPrice = (price) => {
    if(!price){
      return ''
    }

    return price.toLocaleString();
  }

  return (
    <div className='propertyCard' onClick={ handleClick }>
      <div className='propertyCard__header'>
        <img className='propertyCard__img' src='https://d3hzflklh28tts.cloudfront.net/venta-ygygdmmerp-2-414.png?d=400x400' alt={property.address} />
      </div>
      <div className='propertyCard__bodyWrapper'>
        <div className='propertyCard__container'>      
          <p className='propertyCard__cityName'>{property.city}</p>
          <FontAwesomeIcon icon={faHeart} style={{color: liked? "#db0000": '#d2d2d2', fontSize: '25px'}} onClick={(e) => {e.stopPropagation(); handleLike()}}/>
        </div>
        <p className=''>$ {formatPrice(property.price)}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
