"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { data, data1 } from '../util/data'
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  const wrapperRef = useRef(null)
  const [open, setOpen] = useState(false)       // Services dropdown
  const [mobileOpen, setMobileOpen] = useState(false) // Mobile menu
  const [activeIndex, setActiveIndex] = useState(null)

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className='fixed w-full bg-gray-950 shadow-md z-50'>
      <div className="flex h-20 px-6 md:px-12 items-center justify-between">
        
        {/* Logo */}
        <div>
          <Image src='/assets/Logo.png' width={80} height={40} alt='Logo' />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center font-medium space-x-8 relative">
          <ul className="flex space-x-8" ref={wrapperRef}>
            {data.map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer relative transition-all duration-200 group 
                  ${activeIndex === i ? "text-yellow-400" : "text-white"}`}
                onClick={() => {
                  setActiveIndex(i)
                  if (item.name === "Services") setOpen(!open)
                }}
              >
                {item.path ? (
                  <Link href={item.path}>{item.name}</Link>
                ) : (
                  <span className="flex items-center">{item.name} {item.arrow}</span>
                )}

                {/* Underline animation */}
                <div className={`absolute top-8 left-0 h-1 w-8 bg-yellow-400 
                  ${activeIndex === i ? "block" : "hidden"}`}></div>
              </li>
            ))}
          </ul>

          {/* Dropdown for Services */}
          {open && (
            <div className="absolute top-16 left-20 bg-gray-900 text-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-4 w-[600px]">
              {data1.map((e, i) => (
                <Link
                  key={i}
                  href={e.path}
                  className="flex items-start space-x-3 hover:text-yellow-400"
                  onClick={() => setOpen(false)}
                >
                  <Image src={e.img} width={30} height={30} alt={e.name} />
                  <div>
                    <h4 className="font-semibold">{e.name}</h4>
                    <p className="text-sm text-gray-400">{e.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="hidden lg:flex">
          <button
            className="bg-blue-950 rounded-2xl px-6 py-2 border-2 border-gray-400 text-white font-bold hover:bg-blue-800"
            onClick={() => router.push("/contact")}
          >
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-3xl">
            {mobileOpen ? <MdClose /> : <IoMenuSharp />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-900 text-white flex flex-col space-y-4 p-6">
          {data.map((item, i) => (
            <div key={i}>
              {item.path ? (
                <Link
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              ) : (
                <details className="group">
                  <summary className="cursor-pointer flex items-center justify-between">
                    {item.name} {item.arrow}
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    {data1.map((e, idx) => (
                      <Link
                        key={idx}
                        href={e.path}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm hover:text-yellow-400"
                      >
                        {e.name}
                      </Link>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
          <button
            className="bg-blue-950 rounded-2xl px-6 py-2 border-2 border-gray-400 text-white font-bold hover:bg-blue-800"
            onClick={() => {
              router.push("/contact")
              setMobileOpen(false)
            }}
          >
            Contact us
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
