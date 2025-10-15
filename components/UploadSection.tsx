"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaUpload, FaBolt, FaDownload, FaRedo, FaMagic } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import { BiImageAdd } from "react-icons/bi";

export default function UploadSection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setError(null);
      setTransformedImage(null);

      if (file.size > 20 * 1024 * 1024) {
        setError("图片太大了！需要小于 20MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
  });

  const handleTransform = async () => {
    if (!uploadedImage) return;

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch(uploadedImage);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("image", blob, "upload.jpg");

      const apiResponse = await fetch("/api/transform", {
        method: "POST",
        body: formData,
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error || "转换失败了，再试试？");
      }

      const data = await apiResponse.json();
      setTransformedImage(data.transformedImage);
    } catch (err) {
      setError(err instanceof Error ? err.message : "出错了！再试一次吧");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!transformedImage) return;

    const link = document.createElement("a");
    link.href = transformedImage;
    link.download = `cz-style-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    console.log("Reset button clicked!");
    setUploadedImage(null);
    setTransformedImage(null);
    setError(null);
    setIsProcessing(false);
  };

  return (
    <div className="w-full max-w-2xl">
      <AnimatePresence mode="wait">
        {!uploadedImage ? (
          /* Upload dropzone - fun cartoon style */
          <motion.div
            key="dropzone"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <div
              {...getRootProps()}
              className={`relative border-8 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                isDragActive
                  ? "border-yellow-300 bg-yellow-300/30 scale-105 rotate-2"
                  : "border-white/60 bg-white/20 backdrop-blur-lg hover:border-yellow-300"
              }`}
            >
              <input {...getInputProps()} />

              <motion.div
                animate={isDragActive ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 0.5, repeat: isDragActive ? Infinity : 0 }}
                className="space-y-6"
              >
                {/* Fun upload icon */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-white flex justify-center"
                >
                  {isDragActive ? (
                    <BiImageAdd className="text-9xl" />
                  ) : (
                    <FaCamera className="text-9xl" />
                  )}
                </motion.div>

                <div>
                  <p className="text-4xl font-black text-white mb-3 drop-shadow-lg">
                    {isDragActive ? "放开我！" : "拖拽照片"}
                  </p>
                  <p className="text-2xl font-bold text-white/90">
                    或者点击选择
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-lg font-bold text-white/80">
                    支持 JPG, PNG, WebP • 最大 20MB
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* Preview and transform */
          <motion.div
            key="preview"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="space-y-6"
          >
            {/* Image preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Original */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-2"
              >
                <h3 className="text-2xl font-black text-white text-center drop-shadow-lg flex items-center justify-center gap-2">
                  <FaCamera /> 原图
                </h3>
                <div className="rounded-3xl overflow-hidden border-6 border-white shadow-2xl transform -rotate-2 bg-white p-2">
                  <img
                    src={uploadedImage}
                    alt="Original"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>

              {/* Transformed */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-2"
              >
                <h3 className="text-2xl font-black text-white text-center drop-shadow-lg flex items-center justify-center gap-2">
                  <FaBolt className="text-yellow-300" /> CZ 风格
                </h3>
                <div className="rounded-3xl overflow-hidden border-6 border-yellow-300 shadow-2xl transform rotate-2 bg-yellow-300 p-2 min-h-[200px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {isProcessing ? (
                      <motion.div
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center space-y-4"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="flex justify-center"
                        >
                          <FaBolt className="text-6xl text-orange-500" />
                        </motion.div>
                        <p className="text-2xl font-black text-gray-900">
                          AI 魔法中...
                        </p>
                      </motion.div>
                    ) : transformedImage ? (
                      <motion.img
                        key="result"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        src={transformedImage}
                        alt="Transformed"
                        className="w-full h-auto rounded-2xl"
                      />
                    ) : (
                      <motion.div
                        key="waiting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="flex justify-center mb-3"
                        >
                          <GiSparkles className="text-6xl text-yellow-500" />
                        </motion.div>
                        <p className="text-xl font-bold text-gray-900">
                          点击下方变身！
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 10 }}
                  className="bg-red-500 border-4 border-black rounded-2xl p-4 text-center shadow-xl"
                >
                  <p className="text-xl font-bold text-white">❌ {error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons - cartoon style */}
            <div className="flex flex-wrap gap-4 justify-center relative z-[9999] pointer-events-auto">
              {!transformedImage ? (
                <>
                  <motion.button
                    onClick={handleTransform}
                    disabled={isProcessing}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    className="px-8 py-4 bg-yellow-300 rounded-2xl font-black text-2xl text-gray-900 border-4 border-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 transition-all flex items-center gap-2 relative z-50 cursor-pointer"
                  >
                    {isProcessing ? (
                      <>
                        <FaBolt className="animate-spin" /> 处理中...
                      </>
                    ) : (
                      <>
                        <FaMagic /> 开始变身！
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white rounded-2xl font-bold text-xl text-gray-900 border-4 border-black shadow-lg flex items-center gap-2 relative z-50 cursor-pointer"
                  >
                    <FaRedo /> 换一张
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                    className="px-8 py-4 bg-green-500 rounded-2xl font-black text-2xl text-white border-4 border-black shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2 relative z-50 cursor-pointer"
                  >
                    <FaDownload /> 下载图片
                  </motion.button>
                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.1 }}
                    className="px-8 py-4 bg-white rounded-2xl font-bold text-xl text-gray-900 border-4 border-black shadow-lg flex items-center gap-2 relative z-[9999] cursor-pointer pointer-events-auto"
                  >
                    <FaCamera /> 再来一张
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
