import React from "react";
import NewsLetterImage from "../../assets/newsletter.jpg";

export default function Newsletter() {
  return (
    <>
      <div className="flex justify-center my-10 max-w-6xl mx-auto leading-tight text-justify">
        <div className="mx-8 mt-8 relative h-[400px] w-[1200px] rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('../assets/newsletter.jpg')] bg-cover bg-center"
            style={{ backgroundImage: `url(${NewsLetterImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
            <h1 className="sm:text-xl md:text-xl lg:text-2xl font-light px-4">
              Newsletter
            </h1>
            <h1 className="sm:text-xl md:text-3xl lg:text-4xl px-4 font-bold">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="mt-4 text-medium">
              <span className="block">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
              </span>
              <span className="block">
                penawaran spesial dari program-program terbaik hariesok.id
              </span>
            </p>

            <div className="bg-white p-2 rounded-xl shadow-md mt-12 w-full max-w-md mx-auto">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Masukkan Emailmu"
                  className="flex-1 p-3 rounded-l-lg focus:ring-2 focus:ring-yellow-400 text-black"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-yellow-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
