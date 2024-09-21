

 const express= require('express');
 const  {CreateUser,loginUser,resetPassword, ResetPasswordRequest,verifyOTP} = require("../Controller/Auth")
const router = express.Router();

   

 router
 .post('/verify-otp',verifyOTP)
 .post("/register",CreateUser)
  .post("/login",loginUser)
.post('/reset-password', resetPassword)
  .post('/forgot-password',ResetPasswordRequest)


  exports.router=router