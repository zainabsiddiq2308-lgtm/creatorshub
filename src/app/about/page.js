"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full text-white bg-gradient-to-b from-black 
     via-gray-900 to-black overflow-x-hidden">
      {/* Hero Section */}
    {/* Hero Section */}
<div
  className="relative w-full h-[80vh] bg-center bg-cover bg-no-repeat
   flex flex-col justify-center items-center text-center px-6"
  style={{ backgroundImage: "url('/assets/about.png')" }}
>
  <div className="absolute inset-0 bg-black/50"></div> {/* overlay for readability */}
  
  <motion.h1
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  transition={{duration:1}}
    className="relative text-5xl font-bold mb-4 z-10"
  >
    About Us
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="relative max-w-3xl text-lg leading-7 z-10"
  >
    At Crestor – The Art Company, art is more than just a visual experience – 
    it is a form of expression that connects people, cultures, and generations.
  </motion.p>

  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative mt-6 px-6 py-2 bg-pink-600 rounded-full shadow-lg hover:bg-pink-700 transition-all z-10"
  >
    Contact Us
  </motion.button>
</div>

      {/* Our Mission Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-8 text-gray-300">
            We aim to celebrate creativity by curating and creating art that
            inspires. Every piece carries originality, quality, and emotion. Our
            mission is to make art accessible, impactful, and timeless.
          </p>
        </motion.div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/assets/mission.png"
          alt="Mission"
          className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      {/* Our Values Section */}
      <div className="py-16 px-6 bg-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {[
            { title: "Creativity", desc: "Pushing artistic limits daily." },
            { title: "Innovation", desc: "Blending tradition & modern design." },
            { title: "Quality", desc: "Every project reflects excellence." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform w-full"
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CEO Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* CEO Image */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/assets/ceo.jpg"   // 👈 apni CEO ki image yahan dalna
          alt="CEO"
          className="rounded-2xl shadow-lg w-full max-w-sm mx-auto object-cover"
        />

        {/* CEO Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-4">Meet Our CEO</h2>
          <h3 className="text-2xl font-bold text-pink-500 mb-4">
            Usama Bin Ahmed
          </h3>
          <p className="text-lg leading-8 text-gray-300">
            As the visionary leader of <span className="font-semibold">Creator – The Art Company</span>, 
          Usama bin Ahmed believes in the power of creativity to transform lives and communities. 
            With years of experience in art, design, and leadership, she has built a company 
            that bridges tradition with modern innovation. Her mission is simple – to inspire, 
            connect, and create meaningful art that leaves a lasting impact. 
          </p>
          <p className="text-lg leading-8 text-gray-300 mt-4 italic">
            "Art is not just what we create, it’s what we inspire."
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-semibold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <motion.div
              key={e}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg w-full"
            >
              <img
                src={`/assets/team${e}.jpg`}
                alt="Team member"
                className="w-32 h-32 mx-auto rounded-sm mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Member {e}</h3>
              <p className="text-gray-400">Creative Artist</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-600 py-16 text-center">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4"
        >
          Let’s Create Something Together
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black rounded-full text-white font-semibold shadow-lg hover:bg-gray-900 transition-all"
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
};

export default About;
