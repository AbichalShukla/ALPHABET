// src/components/ForgetPassword.js
import React from 'react';
import "../../src/index.css";
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle forget password logic here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="glass-effect p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-3 text-white">Email & Phone No.</label>
            <input
              type="text" { ...register("emailOrPhone  ",{required:"Please Enter Email"  ,type:"email" , 

             }) }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
            />
            {errors.emailOrPhone && (
              <span className="text-red-700">{errors.emailOrPhone.message}</span>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-32 px-4 bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Send Otp
            </button>
          </div>
        </form>
        <a href="/login" className="flex gap-1 mt-4 text-white">
          Back To Login
        </a>
      </div>
    </div>
  );
};

export default ForgetPassword;
