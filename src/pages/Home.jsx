import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import SectionHeader from "../components/molecules/SectionHeader";
export default function Home() {
  return (
    <>
      <HomeLayouts>
        <Hero />
        <SectionHeader />
      </HomeLayouts>
    </>
  );
}
