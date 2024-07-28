import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BackgroundVideo from './Component/BackgroundVideo';
import Navbar from './Component/navbar/Navbar';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ForgetPassword from './Auth/ForgetPassWord';
import ResetPassword from './Auth/ResetPassword';
import ResetPasswordOtp from './Auth/ResetPassswordOtp';
// import {Contect} from './Context/Contect';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<BackgroundVideo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/reset-password-otp' element={<ResetPasswordOtp />} />
          {/* <Route path='/contect' element={<Contect />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
