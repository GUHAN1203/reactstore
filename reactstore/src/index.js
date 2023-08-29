import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Home/Index';
import MobileIndex from './pages/mobile/MobileIndex';
import DisplayIndex from './pages/tv and display/Dispalyindex';
import MobileDetails from './pages/MobileDetails/MobileDetails';
import DisplayDetails from './pages/Tv and Display Details/DisplayDetails';
import Login from './pages/login/Loginform/Login';
import Signup from './pages/login/signup/Signup';
import Forgot from './pages/login/Forgot/Forgot';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';
import AudioIndex from './pages/Audio/AudioIndex';
import AudioDetails from './pages/AudioDetails/AudioDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<App/>}>
        <Route  path ='' element={<Index/>} />
        <Route path ='/mobile' element={<MobileIndex />} />
        <Route path='/display' element={<DisplayIndex/>} />
        <Route path="/mobile-details/:id" element={<MobileDetails/>}/>
        <Route path="/display-details/:id"element={<DisplayDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/audio' element={<AudioIndex/>}/>
        <Route path="/audio-details/:id" element={<AudioDetails/>}/>
      </Route>
    </Routes>
   
   </BrowserRouter>
  </React.StrictMode>
);

