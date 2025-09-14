import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* 1: Company Info */}
        <div className="space-y-4">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <p className="text-gray-400 leading-6">
            Creator of the Art is a technology and design company that
            transforms ideas into impactful digital solutions. We blend
            creativity with innovation to deliver scalable, reliable, and
            user-focused products.
          </p>
        </div>

        {/* 2: Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-amber-600 after:mt-2">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="hover:text-amber-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-amber-500 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="hover:text-amber-500 transition"
              >
                Our Product
              </Link>
            </li>
            <li>
              <Link
                href="/technologies"
                className="hover:text-amber-500 transition"
              >
                Technologies
              </Link>
            </li>
          </ul>
        </div>

        {/* 3: Services */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-amber-600 after:mt-2">
            Our Services
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/productdesign" className="hover:text-amber-500 transition">
                Product Design & Development
              </Link>
            </li>
            <li>
              <Link href="/customsoftware" className="hover:text-amber-500 transition">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link href="/qualityassurance" className="hover:text-amber-500 transition">
                Quality Assurance
              </Link>
            </li>
            <li>
              <Link href="/mobileapp" className="hover:text-amber-500 transition">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-500 transition">
                Website Development
              </Link>
            </li>
          </ul>
        </div>

        {/* 4: Newsletter */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-amber-600 after:mt-2">
            Stay Tuned With Us
          </h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter and get the latest updates.
          </p>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-amber-600 px-5 py-3 hover:bg-amber-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Creator of the Art. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
