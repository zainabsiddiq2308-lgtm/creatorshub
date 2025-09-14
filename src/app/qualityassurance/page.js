"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const QualityAssurance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      {/* Hero Image Section */}
      <div className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/custom.png"
          alt="Quality Assurance"
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
          Quality Assurance
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
          We ensure your software is reliable, secure, and delivers a seamless
          user experience. Through a mix of manual and automated testing, we
          guarantee performance, stability, and bug-free delivery before launch.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Manual Testing
            </h3>
            <p className="text-gray-400 text-sm">
              End-to-end validation of workflows to ensure everything works as
              expected.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Automated Testing
            </h3>
            <p className="text-gray-400 text-sm">
              Faster releases with regression and performance test automation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Performance Assurance
            </h3>
            <p className="text-gray-400 text-sm">
              Stress and load testing to make sure your system scales under
              pressure.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Security Testing
            </h3>
            <p className="text-gray-400 text-sm">
              Identifying vulnerabilities to protect your application and data.
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
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default QualityAssurance;
