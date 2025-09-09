"use client"
import { motion } from "framer-motion"

const problems = [
  {
    problem: "Generic & Copy-Paste Designs",
    solution: "We create original and custom art pieces tailored to your vision.",
  },
  {
    problem: "Lack of Personalization",
    solution: "Every project is customized according to client needs and goals.",
  },
  {
    problem: "Poor Communication",
    solution: "We provide transparent communication and timely updates.",
  },
  {
    problem: "Quality vs Speed Compromise",
    solution: "We maintain top quality while delivering on time with smart workflows.",
  },
  {
    problem: "No Long-Term Support",
    solution: "We offer after-project support and long-term partnerships.",
  },
  {
    problem: "Hidden Costs",
    solution: "Our pricing is 100% transparent with no hidden charges.",
  },
  {
    problem: "Outdated Ideas",
    solution: "We use innovative tools and modern creative approaches.",
  },
]

const process = [
  {
    step: "01",
    title: "Understanding Your Needs",
    desc: "We start by listening carefully to your goals and requirements.",
  },
  {
    step: "02",
    title: "Creative Strategy",
    desc: "Our team brainstorms and plans innovative solutions tailored to you.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "We craft, design, and deliver high-quality creative outputs.",
  },
  {
    step: "04",
    title: "Support & Growth",
    desc: "We provide long-term assistance and keep evolving with your needs.",
  },
]

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Business Owner",
    text: "Crestor transformed my idea into a masterpiece. Their creativity and professionalism are unmatched!",
  },
  {
    name: "Ali Raza",
    role: "Startup Founder",
    text: "I loved the transparent process and on-time delivery. Highly recommended!",
  },
  {
    name: "Emily Smith",
    role: "Art Enthusiast",
    text: "They bring imagination to life in the most unique way. Truly storytellers through art.",
  },
]

const Product = () => {
  return (
    <div className="w-full text-white bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative bg-[url('/assets/whyus-bg.jpg')] bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4 text-yellow-400"
        >
          Why Choose Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl text-lg leading-7 text-gray-200"
        >
          We solve real market problems with creativity, innovation, and passion.
          Here’s why we stand out from the crowd.
        </motion.p>
      </div>

      {/* Problems & Solutions Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Problems We Solve
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-red-400 mb-3">
                🚫 {item.problem}
              </h2>
              <h3 className="text-lg text-green-400">✅ {item.solution}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Our Process
        </h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {process.map((step, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center border border-gray-700 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-5xl font-bold text-yellow-400 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <p className="text-gray-300 mb-4">“{t.text}”</p>
              <h3 className="text-lg font-bold text-yellow-400">{t.name}</h3>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-600 py-20 text-center">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Work With Us?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-black rounded-full text-white font-semibold shadow-lg hover:bg-gray-900 transition-all"
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  )
}

export default Product
