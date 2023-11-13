import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRealEstate } from './context/RealEstateContext';
import Home from "./pages/Home/Home";
import PropertyDetail from "./pages/Property/PropertyDetail"
import './styles/index.scss'

function App() {
  const { fetchData } = useRealEstate();

  useEffect(() => {
    fetchData();
  });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
