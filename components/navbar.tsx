"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{
              rotate: [0, 10, 0, -10, 0],
              y: [0, -5, 0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="relative"
          >
            <Rocket className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <div className="absolute -bottom-1 -right-1 w-6 h-2 bg-gradient-to-r from-blue-500 to-transparent rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Secure365
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-blue-900 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="#web-development" className="text-blue-900 hover:text-blue-600 transition-colors">
            Web Development
          </Link>
          <Link href="#it-services" className="text-blue-900 hover:text-blue-600 transition-colors">
            IT Services
          </Link>
          <Link href="#cloud" className="text-blue-900 hover:text-blue-600 transition-colors">
            Cloud Solutions
          </Link>
          <Link href="#security" className="text-blue-900 hover:text-blue-600 transition-colors">
            Cybersecurity
          </Link>
        </nav>

        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          Contact Us
        </Button>
      </div>
    </motion.header>
  )
}

