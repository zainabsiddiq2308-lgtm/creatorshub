"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Compo2 = () => {
  const route=useRouter()
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/assets/videobg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 " />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-white text-3xl md:text-5xl font-bold mt-20">
            Empowering Business with
            <span className="text-yellow-500 pl-2">IT Solutions</span>
          </h1>
          <p className="text-white mt-6 text-base md:text-lg max-w-2xl">
            We provide innovative software development, IT solutions, cloud
            services, and digital transformation services to help businesses
            grow faster and smarter.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <button className="rounded-md px-6 py-3 bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
            onClick={(()=>(route.push("/contact")))}>
              Get Started
            </button>
            <button className="border-2 border-amber-500 px-6 py-3 rounded-full text-white
             hover:bg-amber-500 hover:text-black transition"  onClick={(()=>(route.push("/services")))}>
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 h-[300px] md:h-[500px]">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero.png"
              alt="Hero Image"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo2;
