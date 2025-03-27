"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Headset, Rocket } from "lucide-react";
import Image from "next/image";

export default function SupportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      id="support"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent"></div>

      <motion.div
        className="absolute left-1/4 bottom-10 w-[180px] h-[180px] opacity-30"
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          y: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/images/earth.png"
          alt="Earth"
          width={180}
          height={180}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-20 w-[100px] h-[100px]"
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0, -15, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/images/astronaut.png"
          alt="Astronaut"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 mb-4"
          >
            Beyond 365
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-blue-900"
          >
            Count on Us 365 Days a Year (And Then Some!)
          </motion.h2>

          <motion.p variants={itemVariants} className="text-blue-700 mb-12">
            At Secure365, we believe true partnership means being there whenever
            you need us. Day or night, weekday or weekend, we're standing
            guard—shielding your systems from threats and helping you expand
            into new territories. When you're ready to explore the next star
            system, we'll be right there by your side, ensuring a safe landing
            every time.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                <Clock className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                24/7 Availability
              </h3>
              <p className="text-blue-700">
                Our support team is available around the clock, ensuring your
                systems are always protected.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                <Headset className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Dedicated Support
              </h3>
              <p className="text-blue-700">
                A personal team that understands your business and provides
                tailored solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                <Rocket className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Rapid Response
              </h3>
              <p className="text-blue-700">
                Quick resolution to issues with our lightspeed response and
                resolution times.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
