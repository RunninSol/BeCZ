"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  "Unlimited Transformations",
  "HD Quality Output",
  "No Watermarks",
  "Instant Processing",
  "Privacy Protected",
  "No Account Required",
];

export default function PricingBadge() {
  return (
    <section className="py-16 bg-gradient-to-b from-binance-dark via-binance-darker to-binance-dark relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,185,11,0.15),transparent_70%)]"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-binance-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          {/* Animated glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-binance opacity-30 blur-3xl rounded-3xl"
          />

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-binance-card/90 to-binance-darker/80 backdrop-blur-md rounded-3xl border-2 border-binance-primary/50 overflow-hidden shadow-2xl shadow-binance-primary/20"
          >
            {/* Header */}
            <div className="text-center py-10 px-6 bg-gradient-to-b from-binance-primary/15 to-transparent relative overflow-hidden">
              {/* Animated particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-binance-primary rounded-full"
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: "100%",
                  }}
                />
              ))}

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-binance mb-6 shadow-xl shadow-binance-primary/50 border-2 border-yellow-300 relative"
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-binance-primary"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-black font-bold text-base relative z-10">100% FREE</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-6xl md:text-7xl font-bold mb-4"
              >
                <motion.span
                  className="gradient-text drop-shadow-xl inline-block"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(240,185,11,0.3)",
                      "0 0 40px rgba(240,185,11,0.6)",
                      "0 0 20px rgba(240,185,11,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  $0
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-2xl text-binance-text font-bold mb-2"
              >
                Forever Free
              </motion.p>
              <p className="text-base text-binance-text/80 font-medium">
                No hidden fees, no subscriptions, no limitations
              </p>
            </div>

            {/* Features */}
            <div className="px-8 py-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.8,
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      x: 5,
                    }}
                    className="flex items-center gap-3 text-binance-text group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-binance-primary/30 flex items-center justify-center border border-binance-primary/50 group-hover:bg-binance-primary/50 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-binance-primary drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <span className="text-base font-medium group-hover:text-binance-primary transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mt-10 text-center"
              >
                <motion.button
                  onClick={() => {
                    const uploadSection = document.getElementById("upload");
                    if (uploadSection) uploadSection.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(240, 185, 11, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-14 py-4 bg-gradient-binance rounded-xl font-bold text-lg text-black transition-all duration-200 shadow-xl shadow-binance-primary/30 border-2 border-binance-primary/20 relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    Get Started Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-binance-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-5 mt-10 text-center"
        >
          {[
            { value: "∞", label: "Uses", icon: "🔄" },
            { value: "0", label: "Ads", icon: "🚫" },
            { value: "100%", label: "Private", icon: "🔒" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
              }}
              className="space-y-2 bg-gradient-to-br from-binance-card/80 to-binance-darker/60 backdrop-blur-sm rounded-xl p-4 border-2 border-binance-primary/30 hover:border-binance-primary/60 transition-all duration-300 shadow-lg shadow-binance-primary/10 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-binance-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                initial={false}
              />
              
              <div className="relative">
                <motion.div
                  className="text-2xl mb-1"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl font-bold gradient-text drop-shadow-lg"
                  whileHover={{ scale: 1.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-binance-text/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
