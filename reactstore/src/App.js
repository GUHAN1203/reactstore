import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Footer from './components/Footer/Footer';
import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import Index from './pages/Home/Index';
import Individual from './pages/mobile/components/Individualmobile';
import Display from './pages/tv and display/components/Display';
import MobileIndex from './pages/mobile/MobileIndex';

function App() {
  return (
   
    <BrowserRouter>
    <NavigationBar />
  
    <Routes >
      <Route exact path ='/' element={<Index/>} />
      <Route path ='/mobile' element={<MobileIndex />} />
      <Route path ='/display' element={< Display/>} />
      <Route path ='/individual' element={<Individual/>} />

    </Routes>
    <Footer/>
   </BrowserRouter>
    
   
  );
}

export default App;
