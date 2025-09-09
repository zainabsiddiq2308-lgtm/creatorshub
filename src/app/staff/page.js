"use client";
import React from "react";
import Image from "next/image";

const Staff = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-10">
      {/* Hero Image */}
      <div className="relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/staffaugmentation.png"
          alt="Staff Augmentation"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl text-center mt-10">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">
          Staff Augmentation
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Boost your team’s capabilities with our expert professionals.
          Staff augmentation allows you to scale quickly, access specialized
          skills, and deliver projects on time — without the overhead of
          permanent hiring.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all">
          Hire Talent
        </button>
      </div>
    </div>
  );
};

export default Staff;
