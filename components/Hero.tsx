"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  // Child animation variants
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background with parallax */}
      <motion.div
        style={{ y: ySpring }}
        className="absolute inset-0 bg-gradient-to-br from-binance-darker via-binance-dark to-binance-darker"
      >
        {/* Floating gradient orbs with different parallax speeds */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-binance-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-binance-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Grid pattern overlay with parallax */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.05, 0]) }}
        className="absolute inset-0 bg-[linear-gradient(rgba(240,185,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(240,185,11,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(14,16,24,0.3)_100%)]" />

      {/* Content with stagger animations */}
      <motion.div
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <div className="space-y-10">
          {/* Badge with pulse animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-binance-card/90 to-binance-darker/80 backdrop-blur-md border-2 border-binance-primary/50 shadow-2xl shadow-binance-primary/20 cursor-pointer group"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-3 w-3"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-binance-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-binance-primary shadow-lg shadow-binance-primary/50" />
              </motion.div>
              <span className="text-base font-bold bg-gradient-to-r from-binance-primary to-yellow-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                100% FREE • NO LIMITS • INSTANT
              </span>
            </motion.div>
          </motion.div>

          {/* Main headline - MORE IMPACTFUL */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-binance-text via-white to-binance-text bg-clip-text text-transparent drop-shadow-2xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Be CZ.
              </motion.span>
              <motion.span
                className="block mt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-binance-primary via-yellow-300 to-binance-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  scale: { delay: 0.7, type: "spring", stiffness: 100 },
                  backgroundPosition: { duration: 3, repeat: Infinity },
                }}
                style={{
                  backgroundSize: "200% auto",
                  textShadow: "0 0 80px rgba(240,185,11,0.5)",
                }}
              >
                Be Bold.
              </motion.span>
            </motion.h1>

            {/* More visual subheadline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl lg:text-3xl font-bold text-binance-text/90"
            >
              <motion.span
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-binance-card/60 backdrop-blur-sm rounded-full border border-binance-primary/30"
              >
                <span className="text-2xl">📸</span>
                Upload
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-binance-primary text-3xl"
              >
                →
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-binance-card/60 backdrop-blur-sm rounded-full border border-binance-primary/30"
              >
                <span className="text-2xl">✨</span>
                AI Magic
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                className="text-binance-primary text-3xl"
              >
                →
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-binance-primary/20 to-yellow-500/20 backdrop-blur-sm rounded-full border-2 border-binance-primary/50"
              >
                <span className="text-2xl">🔥</span>
                <span className="bg-gradient-to-r from-binance-primary to-yellow-300 bg-clip-text text-transparent">
                  CZ Style
                </span>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons - BIGGER AND BOLDER */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8"
          >
            <motion.button
              onClick={scrollToUpload}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 30px 60px rgba(240, 185, 11, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 text-xl md:text-2xl font-black bg-gradient-to-r from-binance-primary via-yellow-400 to-binance-primary rounded-2xl transition-all duration-200 shadow-2xl shadow-binance-primary/40 border-3 border-yellow-300 overflow-hidden"
              style={{
                backgroundSize: "200% auto",
              }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-binance-primary to-yellow-300"
                style={{
                  backgroundSize: "200% auto",
                }}
              />
              <span className="relative z-10 flex items-center gap-3 text-binance-darker">
                <span className="text-2xl">🚀</span>
                Transform Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-3xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={() => {
                const howItWorks = document.getElementById("how-it-works");
                if (howItWorks) howItWorks.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(240, 185, 11, 1)",
                backgroundColor: "rgba(240, 185, 11, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 text-xl md:text-2xl font-bold text-binance-text border-3 border-binance-primary/60 rounded-2xl transition-all duration-200 shadow-xl shadow-binance-primary/20 backdrop-blur-sm hover:text-binance-primary"
            >
              <span className="flex items-center gap-2">
                <span className="text-2xl">👀</span>
                See Examples
              </span>
            </motion.button>
          </motion.div>

          {/* Stats - MORE VISUAL */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto pt-16"
          >
            {[
              { icon: "⚡", value: "< 30s", label: "Processing", color: "from-orange-500 to-red-500" },
              { icon: "💎", value: "$0", label: "Forever", color: "from-binance-primary to-yellow-300" },
              { icon: "🔒", value: "100%", label: "Private", color: "from-green-400 to-emerald-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -3, 3, 0],
                }}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20 group-hover:opacity-40 blur-xl transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color})`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <div className="relative bg-gradient-to-br from-binance-card/80 to-binance-darker/60 backdrop-blur-md rounded-2xl p-6 border-2 border-binance-primary/30 group-hover:border-binance-primary/60 transition-all shadow-xl shadow-binance-primary/10">
                  <motion.div
                    className="text-4xl md:text-5xl mb-2"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: index * 0.3,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-binance-text/80 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-binance-primary/80 text-sm font-bold uppercase tracking-wider">
            Scroll
          </span>
          <motion.svg
            className="w-8 h-8 text-binance-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
