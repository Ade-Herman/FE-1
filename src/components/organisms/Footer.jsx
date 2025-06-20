import React from "react";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white text-gray-700 border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="md:w-1/3">
              <a href="#" className="text-2xl font-semibold">
                <img src={Logo} alt="logo videobelajar" />
              </a>
              <p className="mt-4 text-xl font-bold text-gray-600">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p className="mt-4 text-medium font-medium text-gray-600">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="mt-4 text-medium font-medium text-sm text-gray-600">
                +62-877-7123-1234
              </p>
            </div>

            <div className="md:w-2/3 flex flex-wrap md:justify-end gap-12 mt-8 md:mt-0">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Kategori</h4>
                <nav>
                  <ul>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Digital & Teknologi
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Pemasaran
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Manajemen Bisnis
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Pengembangan Diri
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Desain
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Perusahaan</h4>
                <nav>
                  <ul>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Tentang Kami
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        FAQ
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Kebijakan Privasi
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Ketentuan Layanan
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Bantuan
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Komunitas</h4>
                <nav>
                  <ul>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Tips Sukses
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-sm text-gray-600">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-6 md:my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-medium font-bold text-gray-500 mb-4 md:mb-0">
              &copy; 2023 Gerobak Sayur All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full text-gray-500 hover:text-orange-500 hover:border-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full text-gray-500 hover:text-orange-500 hover:border-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full text-gray-500 hover:text-orange-500 hover:border-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full text-gray-500 hover:text-orange-500 hover:border-orange-500 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
