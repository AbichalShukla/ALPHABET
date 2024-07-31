// src/components/LoginForm.js
import React, { useState,useEffect } from "react";
import "../../src/index.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);


 const useEffect=(()=>{
  onSubmit()
},[])


  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );

      sessionStorage.setItem("user", JSON.stringify(response?.data));
      console.log(response);
      
      if (response?.data?.success === true) {
       const res= toast.success("Login Successful");
       console.log(res)
        navigate("/");
      } else {
        toast.error("Please enter a valid email and password");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="glass-effect p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              {...register("email", {
                required: true,
                type: "email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
              required
            />
            {errors.email && (
              <span className="text-red-700">{errors.email?.message}</span>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-white">Password</label>
            <input
              {...register("password", {
                required: true,
                type: "password",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters long and include one letter, one number, and one special character",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
              required
            />
            {errors.password && (
              <span className="text-red-700">{errors.password?.message}</span>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-32 bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Login
            </button>
            <a
              href="/signup"
              className="w-32 px-10 bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Signup
            </a>
          </div>
        </form>
        <a href="/forget-password" className="flex gap-1 mt-4 text-white">
          Reset Password
        </a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
