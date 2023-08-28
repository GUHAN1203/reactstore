import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart'


import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import Index from './pages/Home/Index';
import MobileIndex from './pages/mobile/MobileIndex';
import MobileDetails from './pages/MobileDetails/MobileDetails';
import DisplayDetails from './pages/Tv and Display Details/DisplayDetails';
import DisplayIndex from './pages/tv and display/Dispalyindex';
import AudioIndex from './pages/Audio/AudioIndex';
import AudioDetails from './pages/AudioDetails/AudioDetails';


import Login from './pages/login/Loginform/Login';
import Signup from './pages/login/signup/Signup';
import Forgot from './pages/login/Forgot/Forgot';
import Orders from './pages/Orders/Orders';

function App() {
  return (
   
    <BrowserRouter>
    <NavigationBar />
  
    <Routes >
      
      <Route  path ='/' element={<Index/>} />
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

 
    </Routes>
   < Footer/>
   </BrowserRouter>
    
   
  );
}

export default App;
