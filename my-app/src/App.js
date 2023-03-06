import './App.css';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './pages/ProductScreen';
import Formulaire from './pages/Formulaire';
import Login from './pages/Login';
function App() {
 
  return (
    <BrowserRouter>
      <div>
        
          <Routes>
          <Route path="/pages/login" element={<Login />} />
             <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<Home />} />
            <Route path='/pages/formulaire' element={<Formulaire />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
