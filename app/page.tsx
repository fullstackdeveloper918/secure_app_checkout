"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import WebDevSection from "@/components/web-dev-section";
import ITServicesSection from "@/components/it-services-section";
import CloudSection from "@/components/cloud-section";
import CyberSecuritySection from "@/components/cyber-security-section";
import SupportSection from "@/components/support-section";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";
import FloatingElements from "@/components/floating-elements";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="relative overflow-hidden bg-background">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/images/stars-light.png')] bg-repeat opacity-30 dark:opacity-60"></div>
        </div>

        <Navbar />

        <FloatingElements />

        <HeroSection />

        <AboutSection />

        <WebDevSection />

        <ITServicesSection />

        <CloudSection />

        <CyberSecuritySection />

        <SupportSection />

        <FinalCTA />

        <Footer />
      </main>
    </ThemeProvider>
  );
}
