"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaStar, FaCrown, FaHeart, FaBolt, FaRocket, FaGem, FaTrophy } from "react-icons/fa";
import { GiSparkles, GiDiamondTrophy, GiCrystalShine } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";

// Example images - real transformations!
const examples = [
  { 
    id: 1,
    image: "/placeholder-images/elonfour.png", 
    icon: FaRocket,
    label: "CZ埃隆",
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    id: 2,
    image: "/placeholder-images/kanye.png", 
    icon: FaCrown,
    label: "CZ侃爷",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 3,
    image: "/placeholder-images/cz-7979f3d6e1304b28affeac60654525d7.png", 
    icon: FaBolt,
    label: "CZ变身",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: 4,
    image: "/placeholder-images/cz-style-1760513955842.png", 
    icon: FaStar,
    label: "CZ明星",
    color: "from-green-400 to-emerald-500"
  },
  { 
    id: 5,
    image: "/placeholder-images/cz-style-1760513992684.png", 
    icon: FaHeart,
    label: "CZ风格",
    color: "from-pink-400 to-red-400"
  },
  { 
    id: 6,
    image: "/placeholder-images/cz-style-1760514020565.png", 
    icon: FaGem,
    label: "CZ钻石",
    color: "from-orange-400 to-red-500"
  },
  { 
    id: 7,
    image: "/placeholder-images/cz-style-1760514054778.png", 
    icon: FaTrophy,
    label: "CZ冠军",
    color: "from-indigo-500 to-purple-500"
  },
];

export default function ExampleTicker() {
  // Duplicate the array multiple times for seamless loop
  const duplicatedExamples = [...examples, ...examples, ...examples];

  return (
    <div className="relative w-full bg-black/40 backdrop-blur-md border-t-4 border-yellow-300 overflow-hidden py-4">
      {/* Scrolling ticker with image examples */}
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: [0, -100 * examples.length], // Adjust based on approximate item width
        }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedExamples.map((example, index) => {
          return (
            <motion.div
              key={`${example.id}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`relative bg-gradient-to-br ${example.color} rounded-3xl p-4 border-4 border-black shadow-2xl`}>
                {/* Example image */}
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-3 border-white bg-white">
                  <img 
                    src={example.image} 
                    alt={example.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <HiSparkles className="text-yellow-300 text-3xl drop-shadow-lg" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent pointer-events-none z-10" />
    </div>
  );
}

