import React from "react";
import Stars from "../../assets/stars.jpeg";

export default function Card({
  cardImage,
  title,
  description,
  profileImage,
  instructorName,
  instructorTitle,
  instructorCompany,
  rating,
  reviewCount,
  price,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-200 flex flex-col h-full">
      <img
        src={cardImage}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-left">{title}</h3>
        <p className="text-gray-500 text-left line-clamp-2 mt-2">
          {description}
        </p>
        <div className="flex items-center space-x-4 p-4 pl-0">
          <img
            src={profileImage}
            alt={instructorName}
            className="w-12 h-12 squared-full rounded-xl"
          />
          <div>
            <p className="text-gray-800 font-semibold text-left">
              {instructorName}
            </p>
            <p className="text-gray-500 text-sm">
              {instructorTitle} di{" "}
              <span className="text-gray-500 font-semibold">
                {instructorCompany}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Stars} alt="Star rating" className="w-20 h-4" />
            <span className="ml-2 text-sm text-gray-600">
              <span className="font-medium">{rating}</span> ({reviewCount})
            </span>
          </div>
          <div className="text-xl font-bold tracking-wide text-green-400">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
