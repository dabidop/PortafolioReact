"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import SpaceBackground from "@/components/SpaceBackground";
import { useTranslation } from "@/i18n/useTranslation";

export default function AboutPage() {
  const t = useTranslation().infoCards.skills;

  return (
    <>
      <Navbar />
      <SpaceBackground />
      <div className="navbar-spacer" />
      <main className="about-page flex-1">
        <div className="about-container">
          <h1>{t.title}</h1>
          <p className="about-text">{t.content}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
