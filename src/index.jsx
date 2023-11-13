import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RealEstateProvider } from './context/RealEstateContext';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RealEstateProvider>
      <App />
    </RealEstateProvider>
  </React.StrictMode>
);