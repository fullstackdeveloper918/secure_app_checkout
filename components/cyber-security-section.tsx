"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShieldAlert, Lock, Search, Shield } from "lucide-react";

export default function CyberSecuritySection() {
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
      id="security"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent"></div>

      <motion.div
        className="absolute right-20 top-20 w-[100px] h-[100px]"
        animate={{
          y: [0, -15, 0],
          x: [0, -15, 0, 15, 0],
          rotate: [0, -10, 0, 10, 0],
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative order-2 md:order-1"
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-purple-300 rounded-lg opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden border border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image
                    src="/images/cybersecurity.png"
                    style={{ objectFit: "contain" }}
                    alt="Cybersecurity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-red-300 to-purple-300 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-300 to-red-300 rounded-full opacity-60 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">
              Cybersecurity
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Protecting Your Orbit and Beyond
            </h2>

            <p className="text-blue-700 mb-8">
              Just like rogue asteroids in deep space, cyber threats can appear
              from nowhere. Our cybersecurity experts deploy advanced defense
              systems to keep you safe from attacks—no matter the galaxy they
              come from. With real-time monitoring, proactive protection, and
              rapid incident response, Secure365 ensures your mission stays on
              track, unimpeded by unseen dangers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 group">
                <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <ShieldAlert className="h-5 w-5 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-red-700 transition-colors">
                    Threat Detection
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Advanced systems to identify and neutralize threats in
                    real-time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <Lock className="h-5 w-5 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-red-700 transition-colors">
                    Data Encryption
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Military-grade encryption to protect your sensitive
                    information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <Search className="h-5 w-5 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-red-700 transition-colors">
                    Security Audits
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Comprehensive vulnerability assessments to identify weak
                    points.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <Shield className="h-5 w-5 text-red-600 group-hover:text-red-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-red-700 transition-colors">
                    Proactive Defense
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Strategic planning to prevent attacks before they happen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
