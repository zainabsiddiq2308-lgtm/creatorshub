"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Prac from "./components/prac";
import About from "./components/about";
import Services from "./components/serivices";
import Client from "./components/client";
import Sdlc from "./components/sdlc";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Nav from "./components/nav";

export default function Home() {
  const [data, setData] = useState(false);

 

  return (
    <div className="flex flex-col relative">
    

      <div className=" "><Nav /></div>
      <Prac />
      <About />
      <Services />
      <Client />
      <Sdlc />
      <Testimonial />
      <Contact />
    </div>
  );
}
