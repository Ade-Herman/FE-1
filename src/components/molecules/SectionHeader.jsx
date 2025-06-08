import React from "react";

export default function SectionHeader() {
  return (
    <>
      <div className="max-w-6xl mx-auto  mt-10">
        <div className="w-1/2 text-left">
          <h1 className="text-3xl font-bold">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <h2 className="text-gray-500 mt-2 tracking-wider font-semibold">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </h2>
        </div>

        <div className="flex justify-start -ml-4 mt-10">
          <h3 className="px-3 py-2 mx-1 font-medium text-red-500">
            Semua Kelas
          </h3>
          <h3 className="px-3 py-2 mx-1 font-medium text-gray-500">
            Pemasaran
          </h3>
          <h3 className="px-3 py-2 mx-1 font-medium text-gray-500">Desain</h3>
          <h3 className="px-3 py-2 mx-1 font-medium text-gray-500">
            Pengembangan Diri
          </h3>
          <h3 className="px-3 py-2 mx-1 font-medium text-gray-500">Bisnis</h3>
        </div>
        <div className="flex text-left">
          <div className="relative w-12 h-1.5 bg-red-500 rounded-full mt-0 mb-10"></div>
        </div>
      </div>
    </>
  );
}
