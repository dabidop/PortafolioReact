"use client";
import Image from "next/image";
import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <SpaceBackground />
      <Hero />
      <Footer />

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        
      </main>
    </div>
  );
}
