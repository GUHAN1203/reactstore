import logo from './logo.svg';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Index from './pages/Index';
import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import Mobile from './pages/Mobile';
import Display from './pages/Display';

import Individual from './pages/Individual';
import ProductList from './pages/Mobile';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
  
    <Routes >
      <Route exact path ='/' element={<Index />} />
      <Route path ='/mobile' element={<Mobile />} />
      <Route path ='/display' element={<Display />} />
      <Route path ='/individual' element={<Individual/>} />

    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
