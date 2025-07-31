import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavbarAuth from "../components/organisms/NavbarAuth";
import ClosedEye from "../assets/mdi_eye-off.png";
import OpenEye from "../assets/mdi_eye.png";
import BenderaIndonesia from "../assets/indonesia.png";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = existingUsers.some(
        (user) => user.email === formData.email
      );
      if (userExists) {
        alert("A user with this email already exists.");
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      existingUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      alert("An error occurred during registration.");
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <NavbarAuth />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-1">
            Pendaftaran Akun
          </h2>
          <p className="text-sm text-center text-gray-500 mb-4">
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <form onSubmit={handleRegister}>
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                  type="tel"
                  placeholder="8123456789"
                  className="w-full px-3 py-2 border-t border-b border-r border-gray-100 rounded-r-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                  value={formData.phone}
                  onChange={handleChange}
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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                >
                  <img
                    src={showPassword ? OpenEye : ClosedEye}
                    alt="Toggle Password Visibility"
                    className="w-5 h-5"
                  />
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
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                >
                  <img
                    src={showConfirmPassword ? OpenEye : ClosedEye}
                    alt="Toggle Password Visibility"
                    className="w-5 h-5"
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <Link
                to="/forgot-password"
                className="text-sm font-bold text-gray-500 cursor-pointer hover:text-blue-500"
              >
                Lupa Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white font-bold rounded-md mb-2 hover:bg-green-600"
            >
              Daftar
            </button>

            <Link
              to="/login"
              className="w-full block text-center py-2 mt-2 bg-[#E0FDDF] text-green-500 font-bold rounded-md hover:bg-green-100"
            >
              Sudah punya akun? Masuk
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
