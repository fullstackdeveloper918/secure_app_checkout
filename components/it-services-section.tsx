"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Server, Activity, Network, HardDrive } from "lucide-react"

export default function ITServicesSection() {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden" id="it-services">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent"></div>

      <motion.div
        className="absolute right-10 top-40 w-[120px] h-[120px]"
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-lg opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%] rounded-lg overflow-hidden border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image src="/images/it-services.png" style={{objectFit:"contain"}}  alt="IT Services" fill className="object-cover" />
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full opacity-60 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">IT Services</div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Keeping You Online, Operational, and Optimized—Across All Frontiers
            </h2>

            <p className="text-blue-700 mb-8">
              From this galaxy to the next, our IT Services provide the steady hand you need at mission control. We keep
              your systems in perfect orbit with 24/7 monitoring, swift troubleshooting, and strategic upgrades. So
              whether your business is scaling up or venturing into uncharted territory, you'll have the support you
              need at every turn.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 group">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Server className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-blue-700 transition-colors">
                    Managed IT & Infrastructure
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Complete oversight and management of your technology ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Activity className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-blue-700 transition-colors">
                    Proactive Monitoring
                  </h3>
                  <p className="text-blue-700 text-sm">
                    24/7 surveillance to prevent issues before they impact your operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Network className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-blue-700 transition-colors">
                    Network Security
                  </h3>
                  <p className="text-blue-700 text-sm">Robust protection for your critical network infrastructure.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <HardDrive className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-900 group-hover:text-blue-700 transition-colors">
                    Business Continuity
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Disaster recovery planning to ensure your business stays operational in any scenario.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

