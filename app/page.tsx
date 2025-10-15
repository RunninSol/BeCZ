"use client";

import UploadSection from "@/components/UploadSection";
import ExampleTicker from "@/components/ExampleTicker";
import WebGLBackground from "@/components/WebGLBackground";
import { FaRocket, FaFire, FaBolt, FaLock, FaGem, FaCrown, FaStar, FaMagic } from "react-icons/fa";
import { GiPartyPopper, GiSparkles, GiCrystalShine } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden flex flex-col relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(240,185,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(240,185,11,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
      
      {/* Animated WebGL Background */}
      <WebGLBackground />
      {/* Main content - no scroll, full height split layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-0 p-4 md:p-8 relative z-10">
        {/* Left side - Upload Section */}
        <div className="flex-1 flex items-center justify-center">
          <UploadSection />
        </div>

        {/* Right side - Fun Info */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-2xl text-center space-y-8 relative">
            {/* Background image positioned behind text */}
            <img 
              src="/FOUR.png" 
              alt="4" 
              className="absolute -top-[7rem] md:-top-[11rem] left-1/2 -translate-x-1/2 h-64 md:h-96 w-auto object-contain pointer-events-none z-0" 
            />
            
            {/* Main title with cartoon style */}
            <div className="space-y-4 relative z-10">
              <h1 className="text-6xl md:text-8xl font-black text-white transform -rotate-2 drop-shadow-[0_8px_0_rgba(0,0,0,0.3)]">
                Be CZ!
              </h1>
              <p className="text-3xl md:text-5xl font-bold text-yellow-300 transform rotate-1 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)] flex items-center justify-center gap-3">
                <FaMagic />
                变身 CZ 大佬！
                <HiSparkles />
              </p>
            </div>

            {/* Fun descriptions with cartoon bubbles */}
            <div className="space-y-6 relative z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform -rotate-1 border-4 border-black">
                <p className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3 flex-wrap">
                  上传照片 <FaBolt className="text-orange-500" /> AI 魔法 <GiSparkles className="text-yellow-500" /> 秒变 CZ！
                </p>
              </div>

              <div className="bg-yellow-300 rounded-3xl p-6 shadow-2xl transform rotate-2 border-4 border-black">
                <p className="text-xl font-bold text-gray-900 flex items-center justify-center gap-3 flex-wrap">
                  <GiPartyPopper className="text-2xl" /> 100% 免费 • 无限使用 • 即刻体验
                </p>
              </div>

              <div className="bg-pink-400 rounded-3xl p-5 shadow-2xl transform -rotate-1 border-4 border-black">
                <p className="text-lg font-bold text-white flex items-center justify-center gap-3 flex-wrap">
                  <FaGem className="text-xl" /> 适合微信头像 • Twitter PFP • 朋友圈装X
                </p>
              </div>
            </div>

            {/* Fun stats with bouncy style */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-red-500 rounded-2xl p-4 border-4 border-black shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                <FaBolt className="text-4xl text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-white">30秒</div>
                <div className="text-sm font-bold text-white/90">超快</div>
              </div>
              <div className="bg-green-500 rounded-2xl p-4 border-4 border-black shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                <FaLock className="text-4xl text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-sm font-bold text-white/90">隐私</div>
              </div>
              <div className="bg-blue-500 rounded-2xl p-4 border-4 border-black shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
                <FaCrown className="text-4xl text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-white">免费</div>
                <div className="text-sm font-bold text-white/90">永久</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker with examples */}
      <div className="relative z-20">
        <ExampleTicker />
      </div>
    </main>
  );
}
