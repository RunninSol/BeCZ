"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-binance-darker to-binance-dark border-t-2 border-binance-primary/30 relative overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        animate={{ scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-binance-primary to-transparent"
      />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-binance-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold gradient-text drop-shadow-lg cursor-pointer"
            >
              BeCZ
            </motion.h3>
            <p className="text-binance-text/90 max-w-md font-medium leading-relaxed">
              Transform your profile pictures into{" "}
              <motion.span
                className="text-binance-primary font-bold"
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
              >
                CZ-style
              </motion.span>{" "}
              images using AI. Free, fast, and privacy-focused.
            </p>

            {/* Social links with hover effects */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
                { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub" },
                { icon: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z", label: "Discord" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full bg-binance-card border-2 border-binance-primary/30 hover:border-binance-primary hover:bg-binance-primary/20 flex items-center justify-center transition-all duration-200 shadow-lg shadow-binance-primary/5 hover:shadow-binance-primary/20 relative group"
                  aria-label={social.label}
                >
                  {/* Pulsing ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-binance-primary opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.5, 0],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <svg
                    className="w-5 h-5 text-binance-text/80 group-hover:text-binance-primary transition-colors duration-200 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-binance-text mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Try Now", href: "#upload" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-binance-text/80 hover:text-binance-primary transition-colors duration-200 font-medium inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-binance-text mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              {[
                { label: "FAQ", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-binance-text/80 hover:text-binance-primary transition-colors duration-200 font-medium inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t-2 border-binance-primary/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-binance-text/80 text-sm font-medium">
              © {currentYear} BeCZ. All rights reserved.
            </p>
            <p className="text-binance-text/80 text-sm font-medium">
              Made with{" "}
              <motion.span
                className="text-binance-primary font-bold inline-block"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                ♥
              </motion.span>{" "}
              for the crypto community
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
