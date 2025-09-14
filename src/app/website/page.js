"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      {/* Hero Section with Overlay */}
      <div className="relative w-full h-[400px] max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/website.png" // apni website image ka path lagao
          alt="Website Development"
          fill
          className="object-cover w-full opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-3xl md:text-4xl font-bold text-center"
        >
          Professional Website Development
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center mt-12"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          We create modern, responsive, and SEO-friendly websites that help
          businesses grow and connect with their audience. From startups to
          enterprises, our team builds scalable, fast, and user-focused
          solutions tailored to your needs.
        </p>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Custom Web Design
            </h3>
            <p className="text-gray-400 text-sm">
              Beautiful and unique designs that reflect your brand identity.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Responsive Layouts
            </h3>
            <p className="text-gray-400 text-sm">
              Mobile-friendly websites that work seamlessly on all devices.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              E-commerce Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Secure and scalable online stores with smooth checkout
              experiences.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              SEO Optimization
            </h3>
            <p className="text-gray-400 text-sm">
              Websites built to rank higher and attract more visitors
              organically.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              CMS Integration
            </h3>
            <p className="text-gray-400 text-sm">
              Manage content easily with WordPress or custom-built CMS.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Maintenance & Support
            </h3>
            <p className="text-gray-400 text-sm">
              Ongoing updates, monitoring, and security for a worry-free
              experience.
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

export default Website;
