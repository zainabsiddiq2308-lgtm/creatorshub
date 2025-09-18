import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from 'react';
const  Contact=() => {
   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
  
      try {
        const res = await fetch("http://localhost:3000/api/data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message }),
        });
  
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
  
        const data = await res.json();
  
        if (data.success) {
          setStatus("Message sent successfully!");
          // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        } else {
          setStatus(data.error || "Failed to send message.");
        }
      } catch (err) {
        console.error("Form submit error:", err);
        setStatus("Failed to send message.");
      }
    };
  return (
    <div  className=' flex  gap-x-8  flex-col lg:flex-row bg-white p-2 lg:pt-15'>

      {/* start1 */}
<div className='flex flex-col  items-center justify-between w-full lg:w-[30%]   bg-gray-100 lg:p-20 rounded-2xl lg:gap-y-10'>
  {/* heading */}
<div className='relative'>  <h4 className='text-3xl font-bold pl-4 lg:pl-0'>Let’s Build Something Great </h4>
<h4 className='text-yellow-600 text-3xl font-bold md:absolute md:bottom-0.5 md:left-22 pl-4 lg:pl-0'>Together</h4></div>
{/* end heading */}
  <p className='text-xl font-sans text-center pr-4'>Your next big project starts with a simple call or email.</p>
{/* phon or email */}
 <div className='mt-3'>
   <div className='flex items-center gap-x-3 font-bold '>
    <div className='text-xl'><FaPhone /> </div>
  <Link href="tel:+436506896710" className='underline'>03160486234</Link></div>
<div  className=' flex items-center gap-x-3  font-bold underline'>
  <div className='text-xl'><FaWhatsapp /></div>
<Link href="https://wa.me/+436506896710">+436506896710</Link>
</div>
<div className='flex items-center'><Link href="mailto: infothecreatorshub.tech" 
className='underline font-bold'>infothecreatorshub.tech</Link></div>
</div>

{/* new */}

<div className='flex lg:mt-7 gap-x-4 mt-6'>
<div className='flex justify-center items-center flex-col'>

<div className='w-10 h-10 rounded-3xl bg-white border-2 border-black text-center flex justify-center items-center'>01</div>
<div className='w-1 h-8 bg-black'> </div>
<div className='w-10 h-10 rounded-3xl bg-white border-2 border-black text-center flex justify-center items-center'>02</div>
<div className='w-1 h-8 bg-black'> </div>
<div className='w-10 h-10 rounded-3xl bg-white border-2 border-black text-center flex justify-center items-center'>03</div>
<div className='w-1 h-3 bg-black'> </div>
<div className='w-10 h-10 rounded-3xl bg-white border-2 border-black text-center flex justify-center items-center'>04</div>

</div>
{/*  2*/}
<div className='flex flex-col gap-y-7 font-sans'>
<p>Share your requirements</p>
<p>Discuss them with our experts</p>
<p>Get a free quote</p>
<p>Start the project</p>
</div>
</div>
{/* ------- */}
 </div>

      {/* end */}
  {/* 2nd portion */}
 <div className='flex flex-col w-full  lg:w-[70%]     bg-gray-50 rounded-2xl' >
  <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading & Tagline */}
        <h2 className="text-4xl font-bold mb-4">Let’s Discuss Your Project</h2>
        <p className="text-gray-600 mb-10">
          Have an idea in mind? Share your details with us and let’s build something amazing together.
        </p>

        {/* Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5 text-left">
          <input
            type="text" value={name} 
         onChange={((e)=>(setName(e.target.value)))}
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email" value={email} onChange={((e)=>(setEmail(e.target.value)))}
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input value={phone} onChange={((e)=>{setPhone(e.target.value)})}
            type="tel"
            placeholder="Your Phone Number"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
       <textarea
  rows="4"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="How can we help you?"
  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
></textarea>

          <button onSubmit={handleSubmit}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
         <div className='text-black'> {status}</div>
        </form>
      </div>
    </section>
  </div>

    </div>
  )
}

export default Contact