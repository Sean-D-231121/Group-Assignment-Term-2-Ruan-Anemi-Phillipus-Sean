import React from 'react';
import './Card.css'

const PropertyCard = ({ property }) => {
  return (
    <div className='property-card'>
  <h2>{property.name}</h2>
  <div className='property-image-container'>
    <img src={property.image} alt='' className='imagesize' width={198} />
  </div>
  <p>Location: {property.location}</p>
  <p>Price: {property.price}</p>
</div>
  );
};

export default PropertyCard;