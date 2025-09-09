"use client"
import React, { useState, useRef, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { data1 } from '../util/data'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()
  const wrapperRef = useRef(null) // 👈 wrapper div ka ref

  // Filter data based on query
  const filtered = data1.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false) // 👈 icon / box ke bahar click hua → close
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Search icon toggle */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-xl"
      >
        <CiSearch />
      </div>

      {/* Input + results */}
      {open && (
        <div className="absolute top-8  bg-gray-200 shadow p-2 w-60 rounded text-gray-800 border border-t-4 border-amber-300">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search page..."
            className="w-full p-2 border rounded"
          />

          {/* Filtered results */}
          <ul className="mt-2">
            {filtered.map((item, i) => (
              <li
                key={i}
                onClick={() => router.push(item.path)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
