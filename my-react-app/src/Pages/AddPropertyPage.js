import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import './AddPropertyPage.css'; 

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
    setPropertyDetails({ ...propertyDetails, image: URL.createObjectURL(event.target.files[0]) });
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
    <div className="form-container">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <div className="form-group">
          <label>Property Name:</label>
          <input type="text" name="propertyName" value={propertyDetails.propertyName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={propertyDetails.location} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={propertyDetails.price} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Bedrooms:</label>
          <input type="number" name="bedrooms" value={propertyDetails.bedrooms} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Bathrooms:</label>
          <input type="number" name="bathrooms" value={propertyDetails.bathrooms} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={propertyDetails.description} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        {propertyDetails.image && (
          <div className="image-preview-container">
            <img className="image-preview" src={propertyDetails.image} alt="Property" />
          </div>
        )}
        <button type="submit" className="add-property-button">Add Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
