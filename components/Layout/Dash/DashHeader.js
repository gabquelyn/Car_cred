'use client'
import { useState, useEffect } from 'react';
import LogoVPN from "../../../public/assets/Logo.svg";

const DashHeader = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <>
      <div className="flex items-center bg-gray-200">
        <div className=" mr-4 bg-black">
          <img src="./assets/Logo.png" className="w-[100px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 py-5 sm:grid-cols-2 gap-4">
        <div className="bg-gray-200">
          <h1 className="text-xl font-bold">Welcome back, Gerard K.</h1>
        </div>
        <div className="bg-gray-200">
          <div className="relative text-right ml-auto">
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white-500 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={toggleDropdown}
            >
              Profile Menu
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-200 transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white-500 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a href="http://localhost:3000/dashboard" className="block px-4 text-left  py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </a>
                  <a href="/shopsettings" className="block px-4 text-left  py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <a href="/shop" className="block px-4 text-left  py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Shop
                  </a>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>    
    </>
  );
};

export default DashHeader;
