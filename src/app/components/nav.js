import React from 'react'
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <div className="mt-20 bg-gray-800 text-white">
      <motion.div 
        className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 gap-4"
        initial={{ x: 0 }}
      >
        {/* Social Icons */}
        <div className="flex space-x-5 justify-center items-center">
          <Link 
            href="https://www.linkedin.com/company/the-creators-with-art/" 
            target="_blank"
            className="text-2xl hover:text-blue-400"
          >
            <IoLogoLinkedin />
          </Link>
          <Link 
            href="https://www.instagram.com/thecreatorshub____?igsh=MWF6YnE4OWN6ejY5Mw=="
            target="_blank"
            className="text-2xl hover:text-pink-400"
          >
            <GrInstagram />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm md:text-base text-center md:text-left">
          <p className="font-semibold">The Creator With Art</p>
          <Link href="tel:+923160486234" className="hover:underline">
            📞 +92 3160486234
          </Link>
          <Link href="mailto:thecreatorwithart234@gmail.com" className="hover:underline">
            📩 thecreatorwith234@gmail.com
          </Link>
          <span>🕛 Open Monday–Friday 24/7</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Nav
