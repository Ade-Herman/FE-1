import React from "react";
import HeroImage from "../../assets/hero.jpeg";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center mt-10 max-w-6xl mx-auto leading-tight text-justify">
        <div className="mx-8 mt-8 relative h-[400px] w-[1200px] rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative text-center text-white max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
            <h1 className="sm:text-4xl md:text-5xl lg:text-5xl px-4 font-black">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="mt-4 text-sm">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600"
            >
              Temukan Video Course untuk Dipelajari!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
