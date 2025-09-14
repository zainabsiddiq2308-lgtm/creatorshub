import React from 'react'

const Compo1 = () => {
  return (
    <div className="comp1 bg-gray-950">
      <div className="flex flex-col items-center text-white p-6 sm:p-9 md:p-12 lg:p group">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center
                       group-hover:animate-pulse pt-20 group-hover:text-amber-300 lg:pt-52 mb-6">
          A Smarter Approach to Product
        </h1>

        <div className="flex flex-col items-center w-full sm:w-3/4 lg:w-2/3 gap-4 sm:gap-5 text-center">
          <p className="text-base sm:text-lg md:text-xl text-white">
            The creator is an analytics platform that helps product, marketing, 
            and customer success teams craft exceptional digital experiences 
            that convert and retain users.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white">
            We give you all customer data automatically, and the tools to turn 
            that data into action.
          </p>
        </div>

        <button className="mt-6 bg-yellow-500 text-gray-800 font-medium rounded-3xl 
                           px-6 py-3 sm:px-8 sm:py-4 animate-bounce hover:bg-yellow-400">
          Read More
        </button>
      </div>
    </div>
  )
}

export default Compo1
