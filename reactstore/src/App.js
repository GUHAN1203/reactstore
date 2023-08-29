import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Footer from './components/Footer/Footer';

import{ Outlet  } from 'react-router-dom';
import { CreateContextProvider } from './Store/ContextApi';

function App() {
  return (
   
    <CreateContextProvider>
      <NavigationBar />
      <Outlet/>
      < Footer/>
   </CreateContextProvider>
    
   
  );
}

export default App;
