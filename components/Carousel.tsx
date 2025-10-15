"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

// Placeholder images
const placeholderImages = [
  {
    id: 1,
    url: "https://via.placeholder.com/400x400/181A20/F0B90B?text=CZ+Style+1",
    alt: "CZ Transformation 1",
  },
  {
    id: 2,
    url: "https://via.placeholder.com/400x400/181A20/F0B90B?text=CZ+Style+2",
    alt: "CZ Transformation 2",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/400x400/181A20/F0B90B?text=CZ+Style+3",
    alt: "CZ Transformation 3",
  },
  {
    id: 4,
    url: "https://via.placeholder.com/400x400/181A20/F0B90B?text=CZ+Style+4",
    alt: "CZ Transformation 4",
  },
  {
    id: 5,
    url: "https://via.placeholder.com/400x400/181A20/F0B90B?text=CZ+Style+5",
    alt: "CZ Transformation 5",
  },
];

export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = ((page % placeholderImages.length) + placeholderImages.length) % placeholderImages.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Drag animation
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-25, 0, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-binance-dark via-binance-darker to-binance-dark relative overflow-hidden">
      {/* Background decorations with motion */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-binance-primary to-transparent"
        animate={{ scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-binance-primary to-transparent"
        animate={{ scaleX: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Ambient glow effects with animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-binance-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="gradient-text">CZ-Style Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-binance-text/90 text-lg max-w-2xl mx-auto font-medium"
          >
            See examples of photos transformed into{" "}
            <span className="text-binance-primary">CZ-inspired</span> profile pictures
          </motion.p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          {/* Navigation buttons */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 md:left-10 z-20 w-14 h-14 rounded-full bg-binance-card/90 backdrop-blur-md border-2 border-binance-primary/40 hover:border-binance-primary shadow-xl shadow-binance-primary/20 flex items-center justify-center text-binance-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 md:right-10 z-20 w-14 h-14 rounded-full bg-binance-card/90 backdrop-blur-md border-2 border-binance-primary/40 hover:border-binance-primary shadow-xl shadow-binance-primary/20 flex items-center justify-center text-binance-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Carousel container */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                style={{ x, rotate, opacity }}
                className="absolute w-full max-w-[380px] cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative rounded-2xl overflow-hidden bg-binance-card border-2 border-binance-primary/30 shadow-2xl shadow-binance-primary/20"
                >
                  {/* Featured badge */}
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-binance rounded-full text-black text-sm font-bold shadow-xl shadow-binance-primary/50 border-2 border-yellow-300 z-10"
                  >
                    Featured
                  </motion.div>

                  {/* Image */}
                  <div className="aspect-square relative">
                    <motion.img
                      src={placeholderImages[imageIndex].url}
                      alt={placeholderImages[imageIndex].alt}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-binance-darker/95 via-binance-dark/60 to-transparent flex items-end justify-center pb-8"
                    >
                      <motion.span
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                        className="text-binance-text font-bold text-lg tracking-wide"
                      >
                        {placeholderImages[imageIndex].alt}
                      </motion.span>
                    </motion.div>

                    {/* Gold corner accent */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-binance-primary/50 to-transparent"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {placeholderImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === imageIndex
                    ? "bg-binance-primary w-8"
                    : "bg-binance-lightgray/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-binance-text/90 mb-6 font-medium text-lg"
          >
            Ready to create your own{" "}
            <motion.span
              className="text-binance-primary font-bold"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              CZ-style
            </motion.span>{" "}
            profile picture?
          </motion.p>
          <motion.button
            onClick={() => {
              const uploadSection = document.getElementById("upload");
              if (uploadSection) uploadSection.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(240, 185, 11, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3.5 bg-gradient-binance text-black font-bold rounded-xl transition-all duration-200 shadow-xl shadow-binance-primary/30 border-2 border-binance-primary/20"
          >
            <motion.span
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Try It Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
