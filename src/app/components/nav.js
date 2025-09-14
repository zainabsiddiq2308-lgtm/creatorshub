import React from 'react'
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from 'framer-motion';
const Nav = () => {
  return (
    <div className='mt-20  bg-gray-800 '> 
     <motion.div className='flex space-x-35 text-white h-8 pr-5 pl-13' initial={{x:0}} >
            <div className=' flex space-x-5 justify-center items-center'>
             
                <div className='text-xl'><Link href="https://www.linkedin.com/company/the-creators-with-art/">
                <IoLogoLinkedin />
                </Link></div>
                <div><Link href="https://www.instagram.com/thecreatorswithart__?igsh=MWF6YnE4OWN6ejY5Mw==">
                 <GrInstagram />
                </Link></div>
               
            </div>
            {/* end */}
            <div className='text-white flex gap-x-5'><p>the creator with art</p>
            <div><Link href='tel:+92 300 1234567'>📞+ 92 300 1234567</Link></div>
             <div><Link href='mailto:thecreatorwithart234@gmail.com'> 📩thecreatorwith234@gmail.com</Link></div>
            <div>🕛open Monday-Friday 24/7</div>
            </div>


            </motion.div>
            </div>
  )
}

export default Nav