"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      {/* Hero Image Section */}
      <div className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/mobileapp.png"
          alt="Mobile App Development"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-bold text-center"
        >
          Mobile App Development
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center mt-12"
      >
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          We develop high-quality mobile applications for iOS and Android,
          focusing on performance, usability, and scalability. Our team ensures
          your app delivers an engaging user experience and meets your business
          goals.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              iOS & Android Apps
            </h3>
            <p className="text-gray-400 text-sm">
              Build native and cross-platform apps to reach a wider audience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              UX/UI Design
            </h3>
            <p className="text-gray-400 text-sm">
              Intuitive, visually appealing interfaces for superior user
              experience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Performance Optimization
            </h3>
            <p className="text-gray-400 text-sm">
              Smooth and fast apps with minimal loading time and resource usage.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              App Store Deployment
            </h3>
            <p className="text-gray-400 text-sm">
              Complete support for publishing apps on Google Play and Apple
              App Store.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 
          rounded-xl shadow-lg transition-all font-semibold"
        >
          Get Your App
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MobileApp;
