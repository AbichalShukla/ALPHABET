// src/components/LoginForm.js
import React, { useState } from 'react';
import "../../src/index.css"
import { useForm } from "react-hook-form"

const Login = () => {



  

    const {
      register,
   handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
    console.log(errors )


     const onSubmit = ((data)=>{
         console.log(data)

         // Aafter api call i will update tha api login
  
     })

 
  return (
    <div className="flex items-center justify-center  bg-gray-900 min-h-screen ">
      <div className="  glass-effect p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold  text-white  mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}
             
       >
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
             { ...register("email",{required:true  ,type:"email" , pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              }, 

             }) }
             
             
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  transition duration-300 ease-in-out transform focus:-translate-y-1"
              required
            />
         {errors.email && <span className=' text-red-700'>{errors.email?.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block text-white">Password</label>
            <input
              {...register("password",{required:true ,type:"password",

                pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must be at least 8 characters long and include one letter, one number, and one special character",
                  },
               })}

            
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
              required
            />
             {errors.password&&<span className='text-red-700'>{errors.password?.message}</span>}
          </div>
         <div className=' flex   justify-between '>



         <button
       onSubmit={handleSubmit}
            type="submit"
            className=" w-32 bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Login
          </button>
          <a
          href='/signup'
            type="submit"
            className="w-32 px-10 bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
          Signup
          </a>
      
         </div>
        </form>
        <a href='/forget-password' className='flex gap-1   mt-4  text-white'>Reset PassWord</a>


      </div>
    </div>
  );
};

export default Login;
