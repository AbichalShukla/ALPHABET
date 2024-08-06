// src/components/LoginForm.js
import React, { useState } from 'react';
import "../../src/index.css"
import { useForm  } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 import { ToastContainer,toast } from 'react-toastify';

 

const Signup = () => {
 const navigate=useNavigate()

  const onSubmit =async (data,e) => {
 
    // console.log(data)
   try {
    const response = await axios.post('http://localhost:8080/auth/register',data);
//    console.log(response)
   if (response?.data.success == true) {
    toast.success("Signup SucessFull")
    navigate('/login')
   }else{
    navigate('/signup')
     toast.error(" please Enter Valid")
   }
   } catch (error) {
    console.log("SignUp error",error)
   }
  };

    const {
         register,
         handleSubmit,
         watch,
         formState:{errors},

         
    }=useForm()


   
     const password = watch ("password")

  return (
    <div className="flex items-center justify-center  bg-gray-900 min-h-screen ">
      <div className="  glass-effect p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold  text-white  mb-8 text-center">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
            type="email"
            id="email"
               { ...register("email",{required:true  ,type:"email" , pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              }, 

             }) }
        
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out transform focus:-translate-y-1"
           
            />
            {errors.email && <span className=' text-red-700'> {errors.email?.message}</span>}
          </div>

          <div className="mb-6">
            <label className="block text-white">Password</label>
            <input
            id='password'
            type="password"
           {...register ("password", {required:true  , pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "Password must be at least 8 characters long and include one letter, one number, and one special character",
          },})}
          
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  transition duration-300 ease-in-out transform focus:-translate-y-1"
            
            />
            {errors.password &&<span className='text-red-700'>{errors.password?.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block text-white">Confirm Password</label>
            <input
               {...register ("confirmPassword", {
             required:"Confirm Password is Required" , 
               validate: (value)=>{
                 value===password ||"password do not matched"
               }
               })}
            id='confirm-password'
            type="password"

              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  transition duration-300 ease-in-out transform focus:-translate-y-1"
              required
            />
             {errors.confirm-password && <span className=' text-red-700'>{errors.confirm-password.message}</span>}
          </div>
          <button
        
            type="submit"
            className="w-full bg-cyan-950  text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
          Signup
          </button>
        </form>
       <div className=' flex  py-3'>

       <p className='text-white'> You  Have Already An Account</p>
<a className=' px-2  text-blue-700   ' href="/login ">Login</a>
       </div>
      </div>
    </div>
  );
};

export default Signup;
