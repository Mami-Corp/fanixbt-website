"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Join from "@/components/Join";
import MyPics from "@/components/MyPics";
import Navbar from "@/components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="bg-white min-h-screen">
        <Navbar />
        <HeroSection />
        <About />
        {/* <HowToBuy /> */}
        <MyPics />
        <Join />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
