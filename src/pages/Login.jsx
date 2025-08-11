import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import ClosedEye from "../assets/mdi_eye-off.png";
import OpenEye from "../assets/mdi_eye.png";
import NavbarAuth from "../components/organisms/NavbarAuth";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { status, error, user } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (status === "succeeded" && user) {
      alert(`Welcome back, ${user.name}!`);
      navigate("/");
    }
  }, [status, user, navigate]);

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

          {status === "failed" && (
            <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-md text-center">
              {error}
            </div>
          )}

          <form id="loginForm" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full mt-1 p-2 border border-gray-100 rounded-md focus:ring focus:ring-blue-200"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex justify-end mb-4">
              <Link
                to="/forgot-password"
                className="text-sm font-bold text-gray-500"
              >
                Lupa Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white font-bold rounded-md mb-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Loading..." : "Masuk"}
            </button>
            <Link
              to="/register"
              className="w-full block text-center py-2 mt-2 bg-[#E0FDDF] text-green-500 font-bold rounded-md"
            >
              Daftar
            </Link>

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
