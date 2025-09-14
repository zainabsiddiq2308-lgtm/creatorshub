"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const Services = () => {
  const [active, setActive] = useState(1);
  const router = useRouter();

  const services = [
    { name: "Product Design and Development", path: "productdesign", id: 1 },
    { name: "Custom Software Development", path: "customsoftware", id: 2 },
    { name: "Quality Assurance", path: "qualityassurance", id: 3 },
    { name: "Staff Augmentation", path: "staff", id: 4 },
    { name: "Mobile App Development", path: "mobileapp", id: 5 },
    { name: "Website Development", path: "website", id: 6 }
  ];

  const card = [
    {
      id: 1,
      name: "Product Design and Development",
      details:
        "We help transform your ideas into intuitive and engaging digital products. Our process covers everything from user research and wireframing to UI/UX design and full-scale development. By combining creativity with cutting-edge technology, we ensure your product is not only visually appealing but also scalable, user-friendly, and ready for market success."
    },
    {
      id: 2,
      name: "Custom Software Development",
      details:
        "We build tailor-made software solutions designed to meet your unique business needs. From concept to deployment, our team ensures scalability, security, and seamless integration, helping you optimize workflows and achieve long-term growth."
    },
    {
      id: 3,
      name: "Quality Assurance",
      details:
        "We ensure your software is reliable, bug-free, and delivers a seamless user experience. Through rigorous testing, automation, and quality checks, we guarantee performance, security, and scalability before launch."
    },
     {
      id: 4,
      name: "Staff Agumentation",
      details:
       "Staff augmentation is a flexible outsourcing strategy that allows businesses to hire skilled professionals on-demand to fill talent gaps in their teams. With this model, companies can scale their workforce quickly without the long-term costs of full-time hiring. Whether you need developers, designers, project managers, or other IT experts, staff augmentation ensures you get the right talent at the right time. Our approach helps businesses increase efficiency, reduce overhead, and accelerate project delivery while maintaining full control over their processes."
    },
      {
      id: 5,
      name: "Mobile App development",
      details:
       "App development is the process of creating mobile and web applications that are fast, secure, and user-friendly. From idea to deployment, our focus is on building apps that solve real-world problems and enhance user experiences. We design intuitive interfaces, integrate modern features, and ensure seamless performance across iOS, Android, and web platforms. Whether it’s an e-commerce app, a business solution, or a custom product, we develop scalable applications tailored to your goals."
    },
    ,
      {
      id: 6,
      name: "webite development",
      details:
        "Website development involves designing, creating, and maintaining websites. It covers everything from layout and user interface to functionality and performance, ensuring a responsive, fast, and user-friendly online presence for businesses or individuals."
    },
    
    
  ];

  return (
    <div className="text-white p-2 relative">
      {/* Hero Section */}
      <div>
        <div className="mb-20 flex flex-col w-full relative h-[70vh]
         bg-[url('/assets/services.png')] bg-cover bg-no-repeat opacity-10" ></div>
        <motion.div className="absolute top-40 flex flex-col justify-center 
        items-center  left-1/2 -translate-x-1/2 -translate-y-1/2" initial={{y:0}}
          animate={{y:50}} transition={{duration:0.8}}>
          <h1 className="font-bold text-5xl text-yellow-400"  >Our Services</h1>
          <div className="font-semibold">
            Transforming Ideas Into Powerful Digital Solutions
          </div>
        </motion.div>
      </div>
      {/* end */}
<div className="w-full mb-10"><h1 className="text-center text-3xl font-bold text-white">Your Needs, Our Expertise – Choose a Service</h1></div>
      {/* Services List */}
      <div className="mb-40 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-y-4 pl-4">
          {services.map((e, i) => (
            <div
              key={e.id}
              onMouseEnter={() => setActive(e.id)} // hover par ID set
            onClick={(()=>{router.push(`/${e.path}`)})}
              className={`p-3 rounded cursor-pointer transition ${
                active === e.id ? "bg-blue-400 text-black" : "bg-gray-800"
              }`}
            >
              {e.name}
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="relative rounded-4xl shadow-lg md:w-[70%] w-full p-7 bg-gray-900">
          {card
            .filter((c) => c.id === active) // sirf active wala card show kare
            .map((e) => (
              <div key={e.id} className="rounded-xl shadow-lg">
                <div className="text-2xl mb-4">{e.name}</div>
                <p>{e.details}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
