"use client";
import Image from "next/image";
import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Content";
import Footer from "@/components/footer";
import InfoCards from "@/components/InfoCards";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <Navbar />
      <SpaceBackground />
      <Hero />
      <main >
        <InfoCards />
      </main>
      <Footer />
    </div>
  );
}
