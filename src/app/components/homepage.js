"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Prac from "./prac";
import About from "./about";
import Services from "./serivices";
import Client from "./client";
import Sdlc from "./sdlc";
import Testimonial from "./testimonial";
import Contact from "./contact";
import Nav from "./nav";
import Compo2 from "./compo2";


export default function Homepage() {
  const [data, setData] = useState(false);

 

  return (
    <div className="flex flex-col relative">
      <Compo2/>
      <About />
      <Services />
      <Client />
      <Sdlc />
      <Testimonial />
      <Contact />
    </div>
  );
}
