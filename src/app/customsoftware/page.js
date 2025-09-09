"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CustomSoftware = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      {/* Hero Image Section */}
      <div className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/customsoftware.png"
          alt="Custom Software Development"
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
          Custom Software Development
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
          We specialize in building tailor-made software solutions designed to
          meet your unique business challenges. From concept to deployment, our
          development process ensures scalability, security, and seamless
          integration to help you achieve long-term growth.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Custom Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Software tailored to your exact business processes and goals.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Scalable Architecture
            </h3>
            <p className="text-gray-400 text-sm">
              Applications built with growth in mind to support your future
              needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Seamless Integration
            </h3>
            <p className="text-gray-400 text-sm">
              Easily integrate with your existing tools and technologies.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Security First
            </h3>
            <p className="text-gray-400 text-sm">
              Enterprise-grade security standards to protect your data and
              systems.
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
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CustomSoftware;
