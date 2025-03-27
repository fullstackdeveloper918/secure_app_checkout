"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, Shield, Cloud, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent"></div>

      <motion.div
        className="absolute right-0 top-1/4 w-[200px] h-[200px] opacity-20"
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <Image src="/images/earth.png" alt="Earth" width={200} height={200} className="w-full h-full object-contain" />
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
            className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4"
          >
            About Secure365
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Navigating Your Business Through the Stars… and Safeguarding Every Step
          </motion.h2>

          <motion.p variants={itemVariants} className="text-blue-700 mb-12">
            Think of Secure365 as your interstellar co-pilot, guiding you safely through the ever-expanding cosmos of
            modern technology. We blend visionary web development with rock-solid IT services, cloud solutions, and
            cybersecurity—ensuring that no matter which galaxy (or market) you're aiming for, you'll arrive unscathed.
            Our mission? Simple: to help your brand thrive and remain secure, from initial launch to the far reaches of
            tomorrow.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                <Globe className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Web Development</h3>
              <p className="text-blue-700">Your launchpad to other galaxies</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                <Rocket className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">IT Services</h3>
              <p className="text-blue-700">Mission control for every dimension</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                <Cloud className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Cloud Solutions</h3>
              <p className="text-blue-700">Ascend to new galaxies of efficiency</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                <Shield className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Cybersecurity</h3>
              <p className="text-blue-700">Deflector shields up at all times</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

