"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative min-h-[70vh] flex items-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10">
        <Parallax translateY={[-20, 20]}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-700/30 max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full mb-6">
              <Rocket className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Launch into a New Digital Galaxy?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your business was meant to shine across the universe. With
              Secure365 as your guide, you'll have the web development, IT
              services, cloud solutions, and cybersecurity measures you need to
              traverse galaxies with confidence. Let's chart a course to
              success—secure today, secure tomorrow, secure in every galaxy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group">
                Embark on Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </Parallax>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-black/50 backdrop-blur-sm border-t border-gray-800/50 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-white">Secure365</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Secure365. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
}
