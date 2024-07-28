// src/components/ResetPassword.js
import React from 'react';
import { useForm } from 'react-hook-form';
import "../../src/index.css";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="glass-effect p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-white">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must be at least 8 characters long and include one letter, one number, and one special character",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
            />
            {errors.password && <span className="text-red-700">{errors.password.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block text-white">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out transform focus:-translate-y-1"
            />
            {errors.confirmPassword && <span className="text-red-700">{errors.confirmPassword.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-950 text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Reset Password
          </button>
        </form>
        <div className="flex py-3">
          <p className="text-white">Back To Login</p>
          <a className="px-2 text-blue-700" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
