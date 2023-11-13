import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';


const RealEstateContext = createContext();
const initialState = [];

export const RealEstateProvider = ({ children }) => {
    const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/inmuebles");
        dispatch({ type: 'UPDATE_REAL_ESTATE', payload: response.data });
    } catch (error) {
        console.error("Error al obtener las propiedades", error);
    }
    };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_REAL_ESTATE':
        return action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RealEstateContext.Provider value={{ state, dispatch, fetchData  }}>
      {children}
    </RealEstateContext.Provider>
  );
};

export const useRealEstate = () => {
  const context = useContext(RealEstateContext);
  if (!context) {
    throw new Error('useRealEstate debe ser utilizado dentro de un RealEstateProvider');
  }
  return context;
};