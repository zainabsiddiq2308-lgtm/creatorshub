"use client"
import React from 'react'
import { useRef } from 'react'
const Practice = () => {

    const abc=useRef(null)
    function btn(){

       abc.current.textContent="aacc"
    }
  return (
    <div className=' text-white mb-30 flex '>
<h4>{abc.current}</h4>
        <h1>practice</h1>
<button onClick={btn}  className='border border-black' > click it</button>
<div className='bg-yellow-500 w-[400px] h-[100px]  text-white' ref={abc}>abc</div>
    </div>
  )
    }

export default Practice;