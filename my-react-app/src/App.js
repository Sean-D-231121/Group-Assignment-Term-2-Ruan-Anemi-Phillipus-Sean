import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Pages/Homepage';
import AddPropertyPage from './Pages/AddPropertyPage';
import PropertyDetailsPage from './Pages/PropertyDetailsPage';



function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/add" element={<AddPropertyPage/>} />
        <Route path="/details" element={<PropertyDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;