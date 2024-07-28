// src/components/ResetPasswordOtp.js
import React from 'react';
import { useForm } from 'react-hook-form';
import "../../src/index.css";

const ResetPasswordOtp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data,e) => {
     e.preventDefault()
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="glass-effect p-8 rounded-lg shadow-lg w-96">
        <p className="text-white text-start mb-6">
          Enter the Code Which Was Sent to Your Registered Mobile No. & Email id to Reset Your Password.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 gap-10">
            <label className="block text-white text-sm font-semibold mb-2">
              Enter Verification Code
            </label>
            <div className="flex items-center gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  {...register(`otp[${index}]`, { required: "Please Enter Valid Otp" })}
                  className="rounded-full w-12 text-center px-4 py-2 border border-gray-700 focus:outline-none"
                />
              ))}
            </div>
            {errors.otp && (
              <span className='text-red-700'>
                {errors.otp.message}
              </span>
            )}
          </div>
          <div className="flex justify-between mt-6">
            <a href="/login" className="w-[48%] text-white rounded text-start">
              Return to Login
            </a>
            <a href="/reset-password" className="w-[48%] text-white rounded text-end">
              Reset Link
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordOtp;
