
    
 import { Router,Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import ForgetPassWord from '../Auth/ForgetPassWord'
import ResetPassword from '../Auth/ResetPassword'
import ResetPassswordOtp from '../Auth/ResetPassswordOtp'
import BaseLayout from '../BaseLayout'
import BackgroundVideo from '../Component/BackgroundVideo'
import Contact from '../contect/Contect'


 const AllRoute =()=>{
      return(

        <Router>
    <Routes>
  
    <Route path="/" element={<BaseLayout><BackgroundVideo /></BaseLayout>} />
<Route path='/login' element= {<Login></Login>}></Route>
<Route path='/signup' element= {<Signup></Signup>}></Route>
<Route path='/forgetpassword' element= {<ForgetPassWord></ForgetPassWord>}></Route>
<Route path='/resetpassword' element= {<ResetPassword></ResetPassword>}></Route>
<Route path='/resetpasswordotp' element= {<ResetPassswordOtp></ResetPassswordOtp>}></Route>
<Route path='/contact' element= {<Contact></Contact>}></Route>

</Routes>
        </Router>
         
      )
 }
  export default AllRoute




         