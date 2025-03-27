"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FinalCTA() {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-purple-50"></div>

      <motion.div
        className="absolute left-10 top-20 w-[120px] h-[120px]"
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0, -15, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <Image
          src="/images/astronaut.png"
          alt="Astronaut"
          width={120}
          height={120}
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
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 text-blue-900">
            Ready to Launch into a New Digital Galaxy?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-blue-700 mb-12 max-w-2xl mx-auto">
            Your business was meant to shine across the universe. With Secure365 as your guide, you'll have the web
            development, IT services, cloud solutions, and cybersecurity measures you need to traverse galaxies with
            confidence. Let's chart a course to success—secure today, secure tomorrow, secure in every galaxy.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Embark on Your Journey
            </Button>

            <Button
              variant="outline"
              className="border-blue-500 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

