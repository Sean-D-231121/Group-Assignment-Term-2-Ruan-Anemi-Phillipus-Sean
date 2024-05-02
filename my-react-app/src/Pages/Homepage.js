import React, { useState } from 'react';
import PropertyCard from '../Components/PropertyCard';
import NavBar from '../Components/NavBar'
import './Homepage.css'

const HomePage = () => {                            
  const [searchTerm, setSearchTerm] = useState('');
  const properties = [
    { id: 1,  name: 'Luxury Villa', location: 'California', price: '$1,000,000', image: "https://images.prop24.com/306367187/Crop526x328" },
    { id: 2,  name: 'Beachfront Condo', location: 'Florida', price: '$500,000', image: "https://images.prop24.com/330837401/Crop600x400"},
    { id: 3, name: 'Mountain Retreat', location: 'Colorado', price: '$750,000', image: "https://images.prop24.com/329647276/Crop600x400"},
    { id: 4, name: 'Urban Loft', location: 'New York', price: '$800,000', image: "https://images.prop24.com/331166768/Crop526x328"},
    { id: 5, name: 'Cozy Cottage', location: 'Oregon', price: '$300,000', image: "https://images.prop24.com/332351272/Crop600x400"},
    { id: 6, name: 'Lake House', location: 'Michigan', price: '$900,000', image: "https://images.prop24.com/332347811/Crop600x400"},
    { id: 7, name: 'Rural Farmhouse', location: 'Texas', price: '$600,000', image: "https://images.prop24.com/332348527/Crop600x400"},
    { id: 8, name: 'Island Bungalow', location: 'Hawaii', price: '$1,200,000', image: "https://images.prop24.com/330426536/Crop600x400"},
    { id: 9, name: 'Historic Mansion', location: 'Virginia', price: '$2,500,000', image: "https://images.prop24.com/326944024/Crop600x400"},
    { id: 10, name: 'Ski Chalet', location: 'Utah', price: '$1,100,000', image: "https://images.prop24.com/270438799/Crop600x400"},
    { id: 11, name: 'Desert Oasis', location: 'Arizona', price: '$700,000', image: "https://images.prop24.com/321103197/Crop600x400"},
    { id: 12, name: 'Seaside Retreat', location: 'Maine', price: '$950,000', image: "https://images.prop24.com/301270488/Crop525x350" },
    { id: 13, name: 'Forest Cabin', location: 'Washington', price: '$400,000', image: "https://images.prop24.com/306644676/Crop600x400" },
    { id: 14, name: 'Golf Course Estate', location: 'Florida', price: '$1,800,000', image: "https://images.prop24.com/332304957/Crop600x400" },
    
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className='searchput'>
        <input 
        type="text"
        placeholder="Search properties..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      </div>
      
      <div>
        {properties.map(property => (
          <div key={property.id} className="housecards">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


