import React from "react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="text-2xl font-semibold">
            <img src={Logo} alt="logo videobelajar" />
          </a>
        </div>
      </nav>
    </>
  );
}
