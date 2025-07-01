import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emerimg from "../Images/call.png";
import home from "../Images/home.png";
import { use } from "react";

function Navbar() {
  const location = useLocation();
  const hidePath = ["/login", "/signup"];
  if (hidePath.includes(location.pathname)) {
    return null; // Don't render Navbar on these paths
  }
  const [profilePopup, setProfilePopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === "home") navigate("/");
    if (tabName === "dashboard") navigate("/dashboard");
    if (tabName === "emergency") navigate("/emergency");
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    setProfilePopup(false);
  };

  return (
    <>
      {/* Mobile Top Bar - Simple Version */}
      <div className="md:hidden fixed top-0 w-full bg-[#ffffffb5] bg-opacity-80 flex items-center pl-4 z-20 h-15">
        <div
          onClick={() => handleTabClick("home")}
          className="flex items-center cursor-pointer"
        >
          <span className="text-[#6B8E23] text-4xl font-bold inline-block -rotate-12 active:rotate-0 transition-all duration-300">
            E{" "}
          </span>
          <span className="text-2xl font-bold text-black">&nbsp;A S Y</span>
        </div>
      </div>

      {/* Desktop Top Bar - Full Featured */}
      <div className="hidden md:block fixed top-0 w-full bg-gradient-to-r from-[#6B8E23] to-[#556B2F] shadow-lg z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <div
              onClick={() => handleTabClick("home")}
              className="flex items-center cursor-pointer group"
            >
              <div className="bg-white p-2 rounded-full transform group-hover:rotate-12 transition duration-300">
                <span className="text-[#6B8E23] text-2xl font-bold">E</span>
              </div>
              <span className="ml-3 text-white text-xl font-bold tracking-wider">
                ASY
              </span>
            </div>

            {/* Desktop Navigation Items */}
            <div className="flex space-x-8">
              <button
                onClick={() => handleTabClick("home")}
                className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "home"
                    ? "bg-white text-[#6B8E23] shadow-md"
                    : "text-white hover:bg-[#556B2F]"
                }`}
              >
                <img
                  src={home}
                  alt="Home"
                  className={`h-5 w-5 mr-2 ${
                    activeTab === "home" ? "invert" : ""
                  }`}
                />
                <span className="font-medium">Home</span>
              </button>

              <button
                onClick={() => handleTabClick("dashboard")}
                className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "dashboard"
                    ? "bg-white text-[#6B8E23] shadow-md"
                    : "text-white hover:bg-[#556B2F]"
                }`}
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/dashboard.png"
                  alt="Dashboard"
                  className={`h-5 w-5 mr-2 ${
                    activeTab === "dashboard" ? "invert" : ""
                  }`}
                />
                <span className="font-medium">Dashboard</span>
              </button>

              <button
                onClick={() => handleTabClick("emergency")}
                className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "emergency"
                    ? "bg-red-500 text-white shadow-lg animate-pulse"
                    : "text-white bg-red-600 hover:bg-red-700"
                }`}
              >
                <img
                  src={emerimg}
                  alt="Emergency"
                  className="h-5 w-5 mr-2 invert"
                />
                <span className="font-medium">Emergency</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setProfilePopup(!profilePopup)}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/24/ffffff/user-male-circle.png"
                    alt="Profile"
                    className="h-6 w-6"
                  />
                </button>

                {profilePopup && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 z-20 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100 bg-[#6B8E23] bg-opacity-10">
                      <p className="text-sm text-gray-600">
                        {isLoggedIn ? "Welcome back!" : "Guest User"}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6B8E23] hover:bg-opacity-10 transition"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6B8E23] hover:bg-opacity-10 transition"
                    >
                      Help Center
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6B8E23] hover:bg-opacity-10 transition"
                    >
                      Report Issue
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#6B8E23] hover:bg-opacity-10 transition border-t border-gray-100"
                      onClick={handleLoginLogout}
                    >
                      {isLoggedIn ? "Logout" : "Login/Sign Up"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white shadow-[0px_-3px_10px_rgba(0,0,0,0.2)] z-20 ">
        <div className="flex justify-around items-center h-15 px-2">
          {/* Home Button */}
          <button
            onClick={() => handleTabClick("home")}
            className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
              activeTab === "home" ? "text-[#238e51]" : "text-gray-500"
            }`}
          >
            <div
              className={`relative p-2 rounded-full  ${
                activeTab === "home"
                  ? "bg-[rgba(106,142,35,0.61)] bg-opacity-10"
                  : ""
              }`}
            >
              <img
                src={home}
                alt="Home"
                className={`h-7 w-7 ${
                  activeTab === "home" ? "invert-0" : "opacity-70"
                }`}
                style={{
                  filter:
                    activeTab === "home"
                      ? "invert(42%) sepia(93%) saturate(333%) hue-rotate(35deg) brightness(91%) contrast(86%)"
                      : "",
                }}
              />
              {activeTab === "home" && (
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-[#6B8E23] rounded-full"></div>
              )}
            </div>
          </button>

          {/* Dashboard Button */}
          <button
            onClick={() => handleTabClick("dashboard")}
            className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
              activeTab === "dashboard" ? "text-[#6B8E23]" : "text-gray-500"
            }`}
          >
            <div
              className={`relative p-2 rounded-full ${
                activeTab === "dashboard" ? "bg-[#6a8e239c] bg-opacity-10" : ""
              }`}
            >
              <img
                src="https://img.icons8.com/ios-filled/100/dashboard.png"
                alt="Dashboard"
                className={`h-8 w-8 ${
                  activeTab === "dashboard" ? "invert-0" : "opacity-70"
                }`}
                style={{
                  filter:
                    activeTab === "dashboard"
                      ? "invert(42%) sepia(93%) saturate(333%) hue-rotate(35deg) brightness(91%) contrast(86%)"
                      : "",
                }}
              />
              {activeTab === "dashboard" && (
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-[#6B8E23] rounded-full"></div>
              )}
            </div>
          </button>

          {/* Emergency Button */}
          <button
            onClick={() => handleTabClick("emergency")}
            className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
              activeTab === "emergency" ? "text-red-600" : "text-gray-500"
            }`}
          >
            <div
              className={`relative p-2 rounded-full ${
                activeTab === "emergency" ? "animate-pulse bg-red-100" : ""
              }`}
            >
              <div className="absolute -top-0 -right-1 h-2 w-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
              <img
                src={emerimg}
                alt="Emergency"
                className={`h-8 w-8 ${
                  activeTab === "emergency" ? "invert-0" : "opacity-70"
                }`}
                style={{
                  filter:
                    activeTab === "emergency"
                      ? "invert(39%) sepia(65%) saturate(2718%) hue-rotate(337deg) brightness(96%) contrast(96%)"
                      : "",
                }}
              />
              {activeTab === "emergency" && (
                <div className="absolute -top-1 -right-1 h-1 w-1 bg-red-600 rounded-full"></div>
              )}
            </div>
          </button>

          {/* Profile Button */}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            <button
              onClick={() => setProfilePopup(!profilePopup)}
              className={`flex flex-col items-center justify-center w-full transition-all duration-300 ${
                profilePopup ? "text-[#6B8E23]" : "text-gray-500"
              }`}
            >
              <div
                className={`relative p-2 rounded-full ${
                  profilePopup ? "bg-[#6a8e239c] bg-opacity-10" : ""
                }`}
              >
                <img
                  src="https://img.icons8.com/ios-filled/100/user-male-circle.png"
                  alt="Profile"
                  className={`h-8 w-8 ${
                    profilePopup ? "invert-0" : "opacity-70"
                  }`}
                  style={{
                    filter: profilePopup
                      ? "invert(42%) sepia(93%) saturate(333%) hue-rotate(35deg) brightness(91%) contrast(86%)"
                      : "",
                  }}
                />
                {profilePopup && (
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-[#6B8E23] rounded-full"></div>
                )}
              </div>
            </button>

            {profilePopup && (
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-xl shadow-[0px_4px_8px_rgba(0,0,0,0.15)] z-20 border border-gray-200 overflow-hidden">
                <div className="px-4 py-3 bg-[#6B8E23] text-white mb-2">
                  <p className="text-sm font-medium">
                    {isLoggedIn ? "Account Menu" : "Welcome Guest"}
                  </p>
                </div>
                <a
                  href="/login"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6a8e23b5] hover:bg-opacity-10 transition flex items-center"
                >
                  <img
                    src="https://img.icons8.com/ios/24/000000/user-male-circle.png"
                    className="h-4 w-4 mr-3 opacity-70"
                  />
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6a8e23b5] hover:bg-opacity-10 transition flex items-center"
                >
                  <img
                    src="https://img.icons8.com/ios/24/000000/help.png"
                    className="h-4 w-4 mr-3 opacity-70"
                  />
                  Help Center
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#6a8e23b5] hover:bg-opacity-10 transition flex items-center"
                >
                  <img
                    src="https://img.icons8.com/ios/24/000000/bug.png"
                    className="h-4 w-4 mr-3 opacity-70"
                  />
                  Report Issue
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#6B8E23] hover:bg-opacity-10 transition border-t border-gray-100 flex items-center"
                  onClick={handleLoginLogout}
                >
                  <img
                    src={
                      isLoggedIn
                        ? "https://img.icons8.com/ios/24/000000/exit.png"
                        : "https://img.icons8.com/ios/24/000000/login-rounded.png"
                    }
                    className="h-4 w-4 mr-3 opacity-70"
                  />
                  {isLoggedIn ? "Logout" : "Login/Sign Up"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
