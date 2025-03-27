"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const planetScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const astronautY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const astronautRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20"
      id="hero"
    >
      <motion.div
        className="absolute left-1/6 bottom-[15%] w-[600px] h-[600px]"
        style={{
          y: planetY,
          scale: planetScale,
          left: "5%",
        }}
      >
        <Image
          src="/images/planet-blue.png"
          alt="Planet"
          width={600}
          height={600}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-0 w-[400px] h-[400px]"
        style={{
          y: astronautY,
          rotate: astronautRotate,
        }}
      >
        <Image
          src="/images/astronaut-white.png"
          alt="Astronaut"
          width={400}
          height={400}
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto md:mx-0 md:ml-auto text-center md:text-left"
          style={{ y: textY }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Secure in This Galaxy
            </span>
            <br />
            <span className="text-blue-900">—and the Next</span>
          </motion.h1>

          <motion.p
            className="text-xl text-blue-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From Web Development to Cybersecurity: Chart Your Course with
            Secure365
          </motion.p>

          <motion.p
            className="text-blue-700 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Every journey into the unknown starts with a single launch—make
            yours a secure one. At Secure365, we're here to guide your mission
            through this galaxy and beyond, crafting stellar websites, managing
            your IT infrastructure, harnessing the power of the cloud, and
            fortifying your digital defenses. Join us on an odyssey to expand
            your reach across the cosmic frontier—without ever losing sight of
            security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Start Your Missions
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
