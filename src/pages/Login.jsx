import React from "react";
import ClosedEye from "../assets/mdi_eye-off.png";
import NavbarAuth from "../components/organisms/NavbarAuth";

export default function Login() {
  return (
    <>
      <NavbarAuth />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 shadow-2xs">
          <h2 className="text-2xl font-semibold text-center mb-1">
            Masuk ke Akun
          </h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>

          <form id="loginForm">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500">
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
                  <img src={ClosedEye} />
                </span>
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <p className="text-sm font-bold text-gray-500">Lupa Password?</p>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white font-bold rounded-md mb-2"
            >
              Masuk
            </button>
            <button
              type="button"
              className="w-full py-2 mt-2 bg-[#E0FDDF;] text-green-500 font-bold rounded-md"
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
              className="w-full flex items-center justify-center py-2 border border-gray-100 rounded-md text-gray-500 font-bold"
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
