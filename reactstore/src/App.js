import logo from './logo.svg';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Index from './pages/Home/Index';
import{ BrowserRouter, Routes, Route  } from 'react-router-dom';
import Mobile from './pages/mobile/Mobile';
import Display from './pages/tv and display/Display';

import Individual from './pages/mobile/Individualmobile';


function App() {
  return (
    <>
      <NavigationBar/>
      <Index/>
      
    </>
  );
}

export default App;
