import React from "react";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="mt-20 bg-gray-800 text-white w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-6 ">
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <Link
            href="https://www.linkedin.com/company/the-creators-with-art/"
            target="_blank"
            className="text-2xl hover:text-blue-400 transition"
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/thecreatorshub____?igsh=MWF6YnE4OWN6ejY5Mw=="
            target="_blank"
            className="text-2xl hover:text-pink-400 transition"
          >
            <GrInstagram />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-left gap-2 text-sm md:text-base">
          <p className="font-semibold">The Creators Hub</p>
          
          <Link href="tel:+923160486234" className="hover:underline">
            📞 +92 3160486234
          </Link>

          <Link href="tel:+436506896710" className="flex items-center justify-center gap-1 hover:underline">
            <FaWhatsapp className="text-green-400 text-lg" /> +43 6506896710
          </Link>

          <Link href="mailto:thecreatorHub234@gmail.com" className="hover:underline">
            📩 thecreatorHub234@gmail.com
          </Link>

          <span>🕛 Mon–Fri • 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
