import React from 'react'

const Compo1 = () => {
  return (
<div className='comp1 '>
        <div className='flex flex-col gap-y-5 items-center text-white p-9 pt-30 group'>
<h1 className='text-4xl font-bold text-white mt-25  group-hover:animate-pulse
 group-hover:text-amber-300

'>A Smarter approach to product</h1>
<div className='flex flex-col items-center w-3/4 gap-5'>
    <p className='text-xl text-center'>
NexStep is an analtics platform that helps producr marketing 
and customer success team creaft exception digit  expetiences
 that convert and retains users
</p>

<p className='text-xl'>
    We give you all customer data -automatically and the tools  that ture data in to the action
</p>
</div>

 <button id='btn' className='bg-yellow-500  animate-bounce
 pt-4 pb-4 pl-5 pr-5 text-gray-500 font-medium rounded-3xl mt-5'> Read more</button>

    </div>
</div>
  )
}

export default Compo1