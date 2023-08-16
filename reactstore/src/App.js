import logo from './logo.svg';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Index from './pages/Index';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
      <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
