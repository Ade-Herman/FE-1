import React from "react";
import Navbar from "../components/organisms/Navbar";
import ClosedEye from "../assets/mdi_eye-off.png";
import BenderaIndonesia from "../assets/indonesia.png";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 shadow-md">
          {" "}
          <h2 className="text-2xl font-semibold text-center mb-1">
            Pendaftaran Akun
          </h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
          <form>
            {" "}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-500"
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500"
              >
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-500 mb-1"
              >
                Nomor Telepon <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <div className="flex items-center border border-gray-100 rounded-l-md">
                  <span className="px-3 py-2">
                    <img
                      src={BenderaIndonesia}
                      alt="Bendera Indonesia"
                      className="w-13 h-5"
                    />
                  </span>
                  <span className="pr-3 py-2 text-gray-500">+62</span>
                </div>
                <input
                  id="phone"
                  type="text"
                  placeholder="8123456789"
                  className="w-full px-3 py-2 border-t border-b border-r border-gray-100 rounded-r-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-500"
              >
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                  required
                />
                <span
                  id="togglePassword"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                >
                  <img src={ClosedEye} alt="Toggle Password Visibility" />
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-500"
              >
                Konfirmasi Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                  required
                />
                <span
                  id="toggleConfirmPassword"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                >
                  <img src={ClosedEye} alt="Toggle Password Visibility" />
                </span>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <p className="text-sm font-bold text-gray-500 cursor-pointer hover:text-blue-500">
                Lupa Password?
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white font-bold rounded-md mb-2 hover:bg-green-600"
            >
              Masuk
            </button>
            <button
              type="button"
              className="w-full py-2 mt-2 bg-[#E0FDDF] text-green-500 font-bold rounded-md hover:bg-green-100"
            >
              Daftar
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-200" />
              <span className="px-2 text-gray-500">atau</span>
              <hr className="flex-grow border-gray-200" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 border border-gray-200 rounded-md text-gray-500 font-bold hover:bg-gray-50"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Masuk dengan Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
