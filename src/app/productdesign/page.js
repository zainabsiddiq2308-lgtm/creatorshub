"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Productdesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      {/* Image Section with Overlay */}
      <div className="relative w-full h-[400px] max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/product.png"
          alt="Product Design & Development"
        fill
          className="object-cover w-full opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-50 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-bold text-center"
        >
          Product Design & Development
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center mt-12"
      >
        <p className="text-lg text-gray-300 leading-relaxed ">
          We turn innovative ideas into intuitive, user-friendly, and
          market-ready products. Our team focuses on creating designs that
          combine aesthetics with functionality, ensuring your product is
          visually appealing, scalable, and meets real user needs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Research & Strategy
            </h3>
            <p className="text-gray-400 text-sm">
              Deep market and user research to align the product with real
              customer needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              UI/UX Design
            </h3>
            <p className="text-gray-400 text-sm">
              Intuitive interfaces that deliver engaging and seamless
              experiences.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Prototyping
            </h3>
            <p className="text-gray-400 text-sm">
              Interactive prototypes to test and validate ideas before
              development.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Development
            </h3>
            <p className="text-gray-400 text-sm">
              Scalable and robust development using modern technologies.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 
          rounded-xl shadow-lg transition-all font-semibold"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Productdesign;
