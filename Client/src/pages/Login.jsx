import React from 'react'

import { useForm } from "react-hook-form";
import { UserLogin } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
      const response=await UserLogin(data)
      navigate('/login')
      return response
    } catch (error) {
      console.log('error in the component',error)
    }
  };
  return (


    <div className="flex justify-center items-center h-screen bg-gray-100 rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white shadow-md rounded w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>




  ) 
}

export default Login
