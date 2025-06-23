import React from "react";
import Card from "../atoms/Card";

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

const cardData = [
  {
    id: 1,
    cardImage: CardImage1,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile1,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 2,
    cardImage: CardImage2,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile2,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 3,
    cardImage: CardImage3,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile3,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 4,
    cardImage: CardImage4,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile4,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 5,
    cardImage: CardImage5,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile5,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 6,
    cardImage: CardImage6,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile6,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 7,
    cardImage: CardImage7,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile7,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 8,
    cardImage: CardImage8,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile8,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
  {
    id: 9,
    cardImage: CardImage9,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.",
    profileImage: Profile9,
    instructorName: "Jenna Ortega",
    instructorTitle: "Senior Accountant",
    instructorCompany: "Gojek",
    rating: 3.5,
    reviewCount: 86,
    price: "Rp 300K",
  },
];

export default function CardSection() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
