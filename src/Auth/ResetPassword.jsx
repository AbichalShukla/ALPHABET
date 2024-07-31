import React from 'react';
import { useForm } from 'react-hook-form';
import "../../src/index.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, otp, password } = data;
    try {
      const response = await axios.post("http://localhost:8080/auth/reset-password", { email, otp, password });
      if (response?.data?.success === true) {
        toast.success("Password Reset Successfully");
        navigate("/login");
      } else {
        toast.error("Failed to Reset Password");
      }
    } catch (error) {
      toast.error("Failed to Reset Password");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="glass-effect p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
            />
            {errors.email && (
              <span className="text-red-700">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white">OTP</label>
            <input
              {...register("otp", { required: "OTP is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
            />
            {errors.otp && (
              <span className="text-red-700">{errors.otp.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white">New Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
            />
            {errors.password && (
              <span className="text-red-700">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" className="w-full bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
