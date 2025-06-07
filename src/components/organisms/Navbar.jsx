import React from "react";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/Avatar.png";

export default function Navbar() {
  return (
    <>
      <nav class="bg-white py-4 border-b border-gray-200">
        <div class="container mx-auto flex items-center justify-between px-6">
          <a href="#" class="text-2xl font-semibold">
            <img src={Logo} alt="logo videobelajar" />
          </a>
          <div class="flex ml-auto mr-12">
            <p class="text-sm font-bold text-gray-500">Kategori</p>
          </div>
          <img
            class="w-10 h-10 aspect-square-full rounded-md"
            src={Avatar}
            alt=""
          />
        </div>
      </nav>
    </>
  );
}
