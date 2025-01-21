import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
        
        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Dont have an account?{' '}
              <Link href={"/signup"} className="text-blue-500 hover:text-blue-600">Sign up</Link>
          </p>
        </div>

        {/* Google Sign-In Button */}
        <div className="mt-4">
        <Link href="https://accounts.google.com">
  <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200">
    Log in with Google
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}
