"use client"

import React from 'react'
import { images } from '../util/data'
import Image from 'next/image'
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useState } from 'react';
const Client = () => {
 const[val,setval]=useState(0)
  function nextmove(){

  }
  return (
    <div className='w-full relative bg-white  flex flex-col gap-y-6 lg:mt-10'>
        <h1 className='text-4xl font-bold text-center lg:mt-10'>Our Client</h1>
    
      
    <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 overflow-hidden'>
        {images.map((e,i)=>(
            <div key={i} className='relative w-full h-15 flex  items-center' id='moving'>
<Image src={e.img}  fill className='object-contain'  alt='i'></Image>

            </div>
        ))}
    </div>
     
  
      
    
    </div>
  )
}

export default Client