"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Technologies = () => {
  const route=useRouter();
  return (
    <div className="w-full text-white bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* ---------------- Hero Section ---------------- */}
      <div
        className="relative w-full h-[70vh] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('/assets/technology.png')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-5xl font-extrabold z-10"
        >
          Our Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative max-w-3xl text-lg leading-7 mt-6 z-10"
        >
          We use the latest tools, frameworks, and platforms to deliver
          high-quality solutions for web, mobile, and enterprise applications.
        </motion.p>
      </div>

      {/* ---------------- Technology Stack ---------------- */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Technology Stack We Use
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Frontend", tech: "React, Next.js, Angular, Vue.js, TailwindCSS" },
            { title: "Backend", tech: "Node.js, Express, Django, Spring Boot, .NET" },
            { title: "Mobile", tech: "React Native, Flutter, Swift, Kotlin" },
            { title: "Cloud & DevOps", tech: "AWS, Azure, Google Cloud, Docker, Kubernetes" },
            { title: "Databases", tech: "MongoDB, MySQL, PostgreSQL, Firebase" },
            { title: "QA & Tools", tech: "Jest, Cypress, Selenium, JIRA, Git, CI/CD" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Services Section ---------------- */}
      <div className="bg-gray-950 py-20 px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What We Do
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Product Design & Development", desc: "We craft user-friendly and visually appealing products from idea to launch." },
            { title: "Custom Software Development", desc: "Tailored solutions built to meet your business needs and goals." },
            { title: "Mobile App Development", desc: "Cross-platform and native apps that deliver seamless user experiences." },
            { title: "Website Development", desc: "Modern, responsive, and scalable websites for all industries." },
            { title: "Quality Assurance", desc: "Automated and manual testing to ensure reliable and bug-free solutions." },
            { title: "Staff Augmentation", desc: "Extend your team with our skilled professionals to scale faster." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-pink-600/20 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Process Section ---------------- */}
      <div className="py-20 px-6 bg-black/60">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Process
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {["Plan", "Design", "Build", "Test", "Launch"].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{step}</h3>
              <p className="text-gray-400">
                {step === "Plan" && "Defining requirements & goals."}
                {step === "Design" && "Crafting UI/UX prototypes."}
                {step === "Build" && "Developing robust solutions."}
                {step === "Test" && "Ensuring bug-free delivery."}
                {step === "Launch" && "Deploying successfully at scale."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- Testimonials ---------------- */}
      <div className="py-20 px-6">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah J.", review: "They delivered on time with amazing quality. Very professional team!" },
            { name: "David L.", review: "The product design process was smooth and user-focused." },
            { name: "Ayesha K.", review: "Great QA team! They ensured our project was 100% reliable." },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <p className="text-gray-300 italic mb-4">“{t.review}”</p>
              <h4 className="font-semibold text-pink-500">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------- CTA ---------------- */}
      <div className="bg-pink-600 py-16 text-center">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Build Your Next Big Project With Us
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-black rounded-full text-white font-semibold shadow-lg hover:bg-gray-900 transition-all"
       onClick={(e)=>route.push("/contact")}
       >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Technologies;
