import React from "react";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/Avatar.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="#" className="text-2xl font-semibold">
            <img src={Logo} alt="logo videobelajar" />
          </a>
          <div className="flex ml-auto mr-12">
            <p className="text-sm font-bold text-gray-500">Kategori</p>
          </div>
          <img
            className="w-10 h-10 aspect-square-full rounded-md"
            src={Avatar}
            alt=""
          />
        </div>
      </nav>
    </>
  );
}
