import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headers from './components/Headers';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import WeatherForecast from './pages/WeatherForecast';

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/', '/login', '/signup', '/weather-forecast'];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Headers />}
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />   
        <Route path='/login' element={<Login />} />     
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/profile' element={<Profile />} />   
        <Route path="/weather-forecast" element={<WeatherForecast />} />
      </Routes>

      <Toaster />   
    </>
  );
}

export default App;
