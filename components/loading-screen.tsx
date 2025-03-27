"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="absolute inset-0 bg-[url('/images/stars-light.png')] bg-repeat opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8 z-10"
      >
        <motion.div
          animate={{
            rotate: 360,
            y: [0, -10, 0],
          }}
          transition={{
            rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <Rocket className="h-16 w-16 text-blue-600" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gradient-to-t from-blue-500 to-transparent rounded-full blur-sm opacity-70"></div>
        </motion.div>

        <h2 className="text-3xl font-bold text-blue-900">LOADING</h2>

        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="text-blue-600">{progress}%</p>
      </motion.div>
    </div>
  )
}

