"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Compo1 from "./compo1";
import Compo2 from "./compo2";

const Prac = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    { comp: <Compo2 /> },
    { comp: <Compo1 /> },
  ];

  // Next Slide
  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Previous Slide
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Optional: Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Active Slide */}
      <div className="transition-all duration-700">
        {slides[index].comp}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-6 text-xl text-white md:text-3xl -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="hover:text-amber-500 cursor-pointer"
        >
          {/* <FaArrowLeft /> */}
        </button>
        <button
          onClick={nextSlide}
          className="hover:text-amber-500 cursor-pointer"
        >
          {/* <FaArrowRight /> */}
        </button>
      </div>
    </div>
  );
};

export default Prac;
