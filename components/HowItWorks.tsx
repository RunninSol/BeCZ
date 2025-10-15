"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload Your Photo",
    description: "Choose a photo from your device. We accept JPG, PNG, and WebP formats.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Processing",
    description: "Our AI analyzes your photo and applies CZ-style transformation using advanced machine learning.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Download Result",
    description: "Get your CZ-styled profile picture instantly and use it anywhere you want!",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-binance-dark via-binance-darker to-binance-dark relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(240,185,11,0.1),transparent_50%)]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(240,185,11,0.1),transparent_50%)]"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-binance-primary/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-3"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold"
          >
            How <span className="gradient-text">It Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-binance-text/90 text-lg max-w-2xl mx-auto font-medium"
          >
            Transform your photo in <span className="text-binance-primary font-bold">three simple steps</span>
          </motion.p>
        </motion.div>

        {/* Steps with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Animated connection line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-binance-primary/60 to-transparent origin-left"
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              className="relative"
            >
              {/* Step card */}
              <motion.div
                className="relative bg-gradient-to-br from-binance-card/80 to-binance-darker/60 backdrop-blur-sm rounded-2xl p-7 border-2 border-binance-primary/30 shadow-xl shadow-binance-primary/10 h-full overflow-hidden group"
                whileHover={{
                  borderColor: "rgba(240, 185, 11, 0.7)",
                  boxShadow: "0 25px 50px rgba(240, 185, 11, 0.3)",
                }}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-binance-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Glowing step number badge - COMPLETELY REDESIGNED */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="relative">
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-binance-primary/40 blur-xl"
                    />
                    
                    {/* Main number circle with gradient */}
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-binance-primary via-yellow-400 to-binance-primary flex items-center justify-center shadow-2xl shadow-binance-primary/50 border-3 border-yellow-200">
                      <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-binance-darker to-binance-dark flex items-center justify-center">
                        <motion.span
                          className="text-2xl font-black bg-gradient-to-br from-binance-primary to-yellow-300 bg-clip-text text-transparent"
                          animate={{
                            textShadow: [
                              "0 0 20px rgba(240,185,11,0.5)",
                              "0 0 40px rgba(240,185,11,0.8)",
                              "0 0 20px rgba(240,185,11,0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          {step.number}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Icon with animation */}
                <motion.div
                  className="mt-12 mb-6 text-binance-primary flex justify-center relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Icon glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-50"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="relative drop-shadow-2xl">{step.icon}</div>
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-3 relative">
                  <motion.h3
                    className="text-2xl font-bold text-binance-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-binance-text/80 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-binance-primary/20 to-transparent rounded-tl-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              </motion.div>

              {/* Arrow indicator for mobile */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:hidden flex justify-center my-6"
                >
                  <motion.svg
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-8 h-8 text-binance-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom feature highlights with entrance animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {[
            { label: "Fast Processing", value: "< 30s", icon: "⚡" },
            { label: "High Quality", value: "HD", icon: "✨" },
            { label: "Privacy First", value: "100%", icon: "🔒" },
            { label: "Cost", value: "Free", icon: "💎" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="bg-gradient-to-br from-binance-card/80 to-binance-darker/60 backdrop-blur-sm rounded-xl p-5 border-2 border-binance-primary/30 text-center shadow-lg shadow-binance-primary/10 hover:shadow-xl hover:shadow-binance-primary/20 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-binance-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="relative">
                <motion.div
                  className="text-2xl mb-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.value}
                </motion.div>
                <div className="text-binance-text/80 text-sm font-medium">
                  {feature.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
