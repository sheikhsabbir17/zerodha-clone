import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import HomePage from './landing-page/home/HomePage';
import Signup from './landing-page/signup/SignUp';
import AboutPage from './landing-page/about/AboutPage';
import ProductsPage from './landing-page/products/ProductsPage';
import PricingPage from './landing-page/pricing/PricingPage';
import Supportpage from './landing-page/support/SupportPage';
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";
import NotFound from "./landing-page/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/product' element={<ProductsPage />} />
    <Route path='/pricing' element={<PricingPage />} />
    <Route path='/support' element={<Supportpage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);
