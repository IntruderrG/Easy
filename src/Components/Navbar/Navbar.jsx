import React from "react";
import { use } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let [active, setActive] = useState(false);
  let chaticon = "https://img.icons8.com/forma-light/30/chat.png";
  let chaticon2 = "https://img.icons8.com/forma-light-filled/30/chat.png";
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed top-0 h-15 w-screen bg-white opacity-80 flex items-center pl-4 z-10">
        <div onClick={() => navigate("/")}>
          <span className="text-green-800 text-4xl font-bold inline-block -rotate-12 hover:rotate-0 transition-all duration-300">
            E{" "}
          </span>
          <span className="text-2xl font-bold ">&nbsp; A S Y</span>
        </div>
      </div>
      <div className="fixed bottom-0 h-15 w-screen "></div>
    </>
  );
}

export default Navbar;
