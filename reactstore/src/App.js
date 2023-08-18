import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Footer from './components/Footer/Footer';
import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import Index from './pages/Home/Index';
import Mobile from './pages/mobile/Mobile';
import Individual from './pages/mobile/Individualmobile';
import Display from './pages/tv and display/Display';

function App() {
  return (
   
    <BrowserRouter>
    <NavigationBar />
  
    <Routes >
      <Route exact path ='/' element={<Index/>} />
      <Route path ='/mobile' element={<Mobile />} />
      <Route path ='/display' element={< Display/>} />
      <Route path ='/individual' element={<Individual/>} />

    </Routes>
    <Footer/>
   </BrowserRouter>
    
   
  );
}

export default App;
