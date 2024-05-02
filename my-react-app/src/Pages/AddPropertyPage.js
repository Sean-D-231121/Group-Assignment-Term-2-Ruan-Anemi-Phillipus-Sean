import React, { useState } from 'react';
import NavBar from '../Components/NavBar'

const AddPropertyPage = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    propertyName: '',
    location: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: '',
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleImageChange = (event) => {
    setPropertyDetails({ ...propertyDetails, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Property details:', propertyDetails);

    setPropertyDetails({
      propertyName: '',
      location: '',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      description: '',
      image: null
    });
  };

  return (
    <div>
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Property Name:</label>
          <input type="text" name="propertyName" value={propertyDetails.propertyName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={propertyDetails.location} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={propertyDetails.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Bedrooms:</label>
          <input type="number" name="bedrooms" value={propertyDetails.bedrooms} onChange={handleInputChange} />
        </div>
        <div>
          <label>Bathrooms:</label>
          <input type="number" name="bathrooms" value={propertyDetails.bathrooms} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={propertyDetails.description} onChange={handleInputChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
