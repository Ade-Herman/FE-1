import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import SectionHeader from "../components/molecules/SectionHeader";
import CardSection from "../components/molecules/CardSection";
import Newsletter from "../components/molecules/Newsletter";
export default function Home() {
  return (
    <>
      <HomeLayouts>
        <Hero />
        <SectionHeader />
        <CardSection />
        <Newsletter />
      </HomeLayouts>
    </>
  );
}
