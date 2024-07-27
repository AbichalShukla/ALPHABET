
    
 import { BrowserRouter,Router,Route } from 'react-router-dom'
import Login from './Auth/Login'
import Signup from '../Auth/Signup'
import ForgetPassWord from '../Auth/ForgetPassWord'
import ResetPassword from '../Auth/ResetPassword'
import ResetPassswordOtp from '../Auth/ResetPassswordOtp'

<Router>
<Route path='/login' element= {<Login></Login>}></Route>
<Route path='/signup' element= {<Signup></Signup>}></Route>
<Route path='/forgetPassword' element= {<ForgetPassWord></ForgetPassWord>}></Route>
<Route path='/resetpassword' element= {<ResetPassword></ResetPassword>}></Route>
<Route path='/resetpasswordotp' element= {<ResetPassswordOtp></ResetPassswordOtp>}></Route>



        </Router>