"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Palette, Smartphone, Search, Code } from "lucide-react"

export default function WebDevSection() {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden" id="web-development">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-transparent"></div>

      <motion.div
        className="absolute left-20 bottom-20 w-[150px] h-[150px]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <Image
          src="/images/astronaut.png"
          alt="Astronaut"
          width={150}
          height={150}
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
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
              Web Development
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              One Small Step for Your Brand, One Giant Leap for Your Online Presence
            </h2>

            <p className="text-blue-700 mb-8">
              Every expedition to new frontiers begins with a reliable launchpad—and your website is no exception. Our
              web development team designs visually captivating, high-performing platforms that capture your audience's
              imagination and hold strong, no matter how far you travel. Because when your ambition spans galaxies, your
              website needs to keep pace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 group">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Palette className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-purple-700 transition-colors">
                    Cosmic Design Aesthetic
                  </h3>
                  <p className="text-blue-700 text-sm">
                    We fuse creativity with function to build unique, user-friendly interfaces.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Smartphone className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-purple-700 transition-colors">
                    Mobile-Responsive
                  </h3>
                  <p className="text-blue-700 text-sm">Your website looks and operates flawlessly on any device.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Search className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-purple-700 transition-colors">
                    Search Visibility
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Enjoy SEO-friendly architecture that helps your site shine among the stars.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Code className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-purple-700 transition-colors">
                    Future-Ready Tech
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Our code is built to evolve—so your site can boldly go wherever your business leads.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 md:order-2 relative">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 rounded-lg opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image src="/images/web-development.png" style={{objectFit:"contain", padding:"20px"}} alt="Web Development" fill className="object-cover" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-60 blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

