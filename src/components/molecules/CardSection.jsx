import React from "react";
import CardImage1 from "../../assets/1st.jpeg";
import CardImage2 from "../../assets/2nd.jpeg";
import CardImage3 from "../../assets/3rd.jpeg";
import CardImage4 from "../../assets/4th.jpeg";
import CardImage5 from "../../assets/5th.jpeg";
import CardImage6 from "../../assets/6th.jpeg";
import CardImage7 from "../../assets/7th.jpeg";
import CardImage8 from "../../assets/8th.jpeg";
import CardImage9 from "../../assets/9th.jpeg";
import Profile1 from "../../assets/mini1.png";
import Profile2 from "../../assets/mini2.png";
import Profile3 from "../../assets/mini3.png";
import Profile4 from "../../assets/mini4.png";
import Profile5 from "../../assets/mini5.png";
import Profile6 from "../../assets/mini6.png";
import Profile7 from "../../assets/mini7.png";
import Profile8 from "../../assets/mini8.png";
import Profile9 from "../../assets/mini9.png";
import Stars from "../../assets/stars.jpeg";

export default function CardSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage1}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile1}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage2}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile2}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage3}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile3}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage4}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile4}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage5}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile5}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage6}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile6}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage7}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile7}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage8}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile8}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center">
            <img
              src={CardImage9}
              alt="Card Image"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-left">
              Big 4 Auditor Financial Analyst
            </h3>
            <p className="text-gray-500 text-left line-clamp-2 mt-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center space-x-4 p-4 pl-0">
              <img
                src={Profile9}
                alt="Profile"
                className="w-12 h-12 squared-full rounded-xl"
              />
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Jenna Ortega
                </p>
                <p className="text-gray-500 text-sm">
                  Senior Accountant di
                  <span className="text-gray-500 font-semibold">Gojek</span>
                </p>
              </div>
            </div>

            <div className="max-w-xs mx-auto -m-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    <img src={Stars} alt="Star" className="w-30 h-20" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    <span className="font-medium">3.5</span> (86)
                  </span>
                </div>
                <div className="text-xl font-bold tracking-wide text-green-400">
                  Rp 300K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
