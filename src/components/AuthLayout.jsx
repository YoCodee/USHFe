import React from 'react';
import authBg from '../../public/images/LoginGambar.png';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gray-900">
        <img
          src={authBg}
          alt="Rentverse Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-80 blur-sm"
        />

        <div className="relative z-10 w-full flex flex-col items-center justify-center h-full p-12 text-white pb-24 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome to Rentverse</h1>
          <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
            Realize your dream home. We craft spaces that are functional,
            inspiring joy, tranquility, and connection.
          </p>
        </div>
      </div>


      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
