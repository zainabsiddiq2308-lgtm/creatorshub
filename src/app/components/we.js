"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div className="relative w-full h-80 md:h-[400px]" id="about">
          <Image
            src="/assets/about.png" // apni image ka path dalna
            alt="About us"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to our website! We specialize in creating modern, responsive
            and creative web designs. Our mission is to deliver high-quality
            solutions that help businesses grow and shine in the digital world.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            With a passion for design and development, we make sure every
            project we work on brings value to our clients and their customers.
          </p>
          <button className='border-2 border-amber-500 bg-blue-950
           text-white pl-10 pr-10 pt-2 pb-2 rounded-4xl '  
      id='btn'>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default About;
