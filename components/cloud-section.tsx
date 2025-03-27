"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Upload, Scale, Database, Users } from "lucide-react";

export default function CloudSection() {
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
      id="cloud"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 to-transparent"></div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[250px] h-[250px] opacity-20"
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
          width={250}
          height={250}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute left-20 top-40 w-[100px] h-[100px]"
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-700 mb-4">
              Cloud Solutions
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Soar Above the Clouds—Securely
            </h2>

            <p className="text-blue-700 mb-8">
              Elevate your operations to cosmic heights with our tailored cloud
              solutions. Whether you're migrating data, optimizing resources, or
              seeking a flexible infrastructure that can expand at hyperspeed,
              Secure365 helps you master this frontier. By blending agility with
              airtight security, we ensure your cloud environment remains a safe
              haven—ready to scale as fast as you can dream.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 group">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                  <Upload className="h-5 w-5 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-cyan-700 transition-colors">
                    Cloud Migration
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Seamless transition of your data and applications to the
                    cloud.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                  <Scale className="h-5 w-5 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-cyan-700 transition-colors">
                    Scalability
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Flexible resources that grow with your business needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                  <Database className="h-5 w-5 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-cyan-700 transition-colors">
                    Secure Data Storage
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Protected cloud storage with automated backup solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-cyan-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                  <Users className="h-5 w-5 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-cyan-700 transition-colors">
                    Collaboration Tools
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Real-time collaboration platforms for your team.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden border border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image
                    src="/images/cloud-solutions.png"
                    alt="Cloud Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-60 blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
