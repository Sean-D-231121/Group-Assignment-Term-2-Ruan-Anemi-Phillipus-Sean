import React, {useState} from 'react';
import PropertyCard from '../Romponents/PropertyCard';
import NavBar from '../Components/NavBar'
import './Homepage.css'
const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const properties = [
        { id: 1, name: 'Luxury Villa', location: 'California', price: '$1,000,000' },
        { id: 2, name: 'Beachfront Condo', location: 'Florida', price: '$500,000' },
        { id: 3, name: 'Mountain Retreat', location: 'Colorado', price: '$750,000' },
        { id: 4, name: 'Urban Loft', location: 'New York', price: '$800,000' },
        { id: 5, name: 'Cozy Cottage', location: 'Oregon', price: '$300,000' },
        { id: 6, name: 'Lake House', location: 'Michigan', price: '$900,000' },
        { id: 7, name: 'Rural Farmhouse', location: 'Texas', price: '$600,000' },
        { id: 8, name: 'Island Bungalow', location: 'Hawaii', price: '$1,200,000' },
        { id: 9, name: 'Historic Mansion', location: 'Virginia', price: '$2,500,000' },
        { id: 10, name: 'Ski Chalet', location: 'Utah', price: '$1,100,000' },
        { id: 11, name: 'Desert Oasis', location: 'Arizona', price: '$700,000' },
        { id: 12, name: 'Seaside Retreat', location: 'Maine', price: '$950,000' },
        { id: 13, name: 'Forest Cabin', location: 'Washington', price: '$400,000' },
        { id: 14, name: 'Golf Course Estate', location: 'Florida', price: '$1,800,000' },
        { id: 15, name: 'City Penthouse', location: 'California', price: '$2,000,000' },
        { id: 16, name: 'Country Manor', location: 'Ohio', price: '$1,300,000' },
        { id: 17, name: 'Sunny Villa', location: 'Spain', price: '€900,000' },
        { id: 18, name: 'Modern Townhouse', location: 'Massachusetts', price: '$750,000' },
        { id: 19, name: 'Ranch Retreat', location: 'Montana', price: '$1,500,000' },
        { id: 20, name: 'Tropical Paradise', location: 'Florida', price: '$1,700,000' }
      ];
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
    return (
      
      <div className="container mt-4">
          <input
        type="text"
        placeholder="Search properties..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {properties.map(property => (
          <div key={properties.id} className="col">
            <PropertyCard propertyName={property.name} location={property.location}/>
          </div>
        ))}
      </div>
    </div>
      
      
    );
  }


export default HomePage;