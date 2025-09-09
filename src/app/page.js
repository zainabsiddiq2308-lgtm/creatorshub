'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Prac from "./components/prac";
import Compo2 from "./components/compo2";
import We from "./components/we";
import Services from "./components/serivices";
import Client from "./components/client";
import Sdlc from "./components/sdlc";
import Testimonial from "./components/testimonial";
import Practice from "./components/practice";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { motion } from "framer-motion";

export default function Home() {
     function btn(){
          return setdata(false)
     }
      const [data,setdata]=useState(true);
return(

<div className="flex flex-col relative">


      {data&&(
          <motion.div className="overflow-hidden z-50  absolute top-20 left-44 " id="ab"
           >
                <div className='flex flex-col  fixed  bg-gray-50 rounded-4xl' >
  <section className=" bg-gray-50 ">
      <div className=" mx-auto text-center ">
          <div className="text-end font-bold text-4xl cursor-pointer pr-3" onClick={btn}  >x</div>
        {/* Heading & Tagline */}
        <h2 className="text-2xl font-bold mb-4 mt-3">Let’s Discuss Your Project</h2>
        <p className="text-gray-600 mb-3">
          Have an idea in mind? Share your details with us and let’s build something amazing together.
        </p>

        {/* Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-1 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
          </motion.div>
      )}
     <Prac/>
<We/>
<Services/>
<Client/>
<Sdlc/>
<Testimonial/>
{/* <Practice/> */}
<Contact/>

</div>)
  
 
}