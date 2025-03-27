"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { useTheme } from "next-themes";

export default function FloatingElements() {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rocket animation
  const rocketY = useTransform(
    scrollY,
    [0, windowHeight * 5],
    [windowHeight * 0.8, -windowHeight * 0.5],
  );
  const rocketX = useTransform(
    scrollY,
    [
      0,
      windowHeight,
      windowHeight * 2,
      windowHeight * 3,
      windowHeight * 4,
      windowHeight * 5,
    ],
    ["10%", "20%", "70%", "30%", "80%", "50%"],
  );
  const rocketRotate = useTransform(
    scrollY,
    [
      0,
      windowHeight,
      windowHeight * 2,
      windowHeight * 3,
      windowHeight * 4,
      windowHeight * 5,
    ],
    [0, 15, -15, 30, -30, 0],
  );

  // Small astronaut animation
  const astronautY = useTransform(
    scrollY,
    [0, windowHeight * 5],
    [windowHeight * 0.2, windowHeight * 3],
  );
  const astronautX = useTransform(
    scrollY,
    [
      0,
      windowHeight,
      windowHeight * 2,
      windowHeight * 3,
      windowHeight * 4,
      windowHeight * 5,
    ],
    ["80%", "70%", "20%", "60%", "30%", "70%"],
  );
  const astronautRotate = useTransform(
    scrollY,
    [
      0,
      windowHeight,
      windowHeight * 2,
      windowHeight * 3,
      windowHeight * 4,
      windowHeight * 5,
    ],
    [0, -20, 20, -40, 40, 0],
  );

  // Earth animation
  const earthScale = useTransform(scrollY, [0, windowHeight * 5], [0.3, 0.8]);
  const earthY = useTransform(
    scrollY,
    [0, windowHeight * 5],
    [windowHeight * 1.5, windowHeight * 4],
  );
  const earthX = useTransform(scrollY, [0, windowHeight * 5], ["10%", "80%"]);
  const earthOpacity = useTransform(
    scrollY,
    [windowHeight, windowHeight * 1.5, windowHeight * 3, windowHeight * 4.5],
    [0, 1, 1, 0],
  );

  if (!mounted) return null;

  return (
    <>
      {/* Flying Rocket */}
      <motion.div
        className="fixed z-10 w-16 h-16 pointer-events-none"
        style={{
          y: rocketY,
          x: rocketX,
          rotate: rocketRotate,
        }}
      >
        <motion.div
          animate={{
            y: [0, -5, 0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <Rocket className="h-full w-full text-blue-600 dark:text-blue-400" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-t from-blue-500 to-transparent rounded-full blur-sm opacity-70"></div>
        </motion.div>
      </motion.div>

      {/* Small Astronaut */}
      <motion.div
        className="fixed z-10 w-24 h-24 pointer-events-none"
        style={{
          y: astronautY,
          x: astronautX,
          rotate: astronautRotate,
        }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <Image
            src="/images/astronaut.png"
            alt="Floating Astronaut"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Earth */}
      <motion.div
        className="fixed z-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          y: earthY,
          x: earthX,
          scale: earthScale,
          opacity: earthOpacity,
        }}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <Image
            src="/images/earth.png"
            alt="Earth"
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
