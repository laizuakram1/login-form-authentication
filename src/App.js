
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Home/Home/Login/Login';
import SignUp from './pages/Home/Home/Login/SignUp';
import Appointment from './pages/Appointment/Appointment';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
