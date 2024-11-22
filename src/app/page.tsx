"use client";

import React from "react";

import Hero from "../components/HeroSection/Hero";
import Booking from "../components/Booking/Booking";
import Planning from "../components/Planning";
import Model from "../components/Model";
import Banner from "../components/Banner";
import ChooseUs from "../components/chooseus";
import Testimonials from "../components/Testimonials";
import Download from "../components/Download";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Booking />
      <Planning />
      <Model />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
}
