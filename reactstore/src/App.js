import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Footer from './components/footer/Footer'

import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import Index from './pages/Home/Index';
import Individual from './pages/mobile/components/Individualmobile';
import Display from './pages/tv and display/components/Display';
import MobileIndex from './pages/mobile/MobileIndex';
import MobileDetails from './pages/MobileDetails/MobileDetails';


import Login from './pages/login/Loginform/Login';
import Signup from './pages/login/signup/Signup';
import Forgot from './pages/login/Forgot/Forgot';

function App() {
  return (
   
    <BrowserRouter>
    <NavigationBar />
  
    <Routes >
      
      <Route exact path ='/' element={<Index/>} />
      <Route path ='/mobile' element={<MobileIndex />} />
      <Route path ='/display' element={< Display/>} />
      <Route path="/mobile-details/:id" element={<MobileDetails/>}/>
      <Route path ='/individual' element={<Individual/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
 
    </Routes>
   < Footer/>
   </BrowserRouter>
    
   
  );
}

export default App;
