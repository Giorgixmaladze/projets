import { useState } from 'react'


function App() {


  return (
    <div className='w-screen h-screen bg-[#0b0b1a] flex items-center justify-center '>
      <div className='bg-[#1d1837] min-[375px]:w-11/12 min-md:w-9/12  min-[375px]:h-11/12 rounded-[10px] overflow-hidden flex min-[375px]:flex-col items-center min-md:gap-[80px] min-[375px]:gap-[30px] min-lg:h-6/12 min-lg:flex-row-reverse min-lg:w-10/12'>
        <div className="bg-[url('public/images/image-header-mobile.jpg')] bg-cover bg-no-repeat min-[375px]:h-55 min-md:h-70 min-lg:w-6/12  min-[375px]:w-full min-lg:h-full ">
          <div className='w-full h-full bg-[#6d2c88] opacity-70'></div>
        </div>
        <div className='flex min-[375px]:flex-col min-[375px]:items-center min-[375px]: gap-[30px] min-lg:w-6/12'>
          <div className='flex max-sm:flex-col items-center min-md:w-11/12 min-[375px]:w-9/12 text-center min-[375px]:gap-[10px] min-lg:flex-col min-lg:text-left '>
            <h1 className='text-[30px] text-white font-semibold'>Get <span className='text-[#aa5dce]'>insights</span> that help your business grow.</h1>
            <p className='text-gray-400'>Dicover the benefits of data analytics and make better decisions regarding revenue, custoner experience, and overall efficiency.</p>
          </div>
          <div className='flex min-md:w-full min-md:flex-row min-md:justify-around min-[375px]:flex-col min-lg:justify-evenly gap-[20px]'>
            <span className='flex flex-col items-center gap-[5px]'>
              <h2 className='text-white  text-2xl font-semibold'>10k+</h2>
              <p className='text-gray-400'>COMPANIES</p>
            </span>
            <span className='flex flex-col items-center gap-[5px]'>
              <h2 className='text-white text-2xl font-semibold'>314</h2>
              <p className='text-gray-400'>TEMPLATES</p>
            </span>
            <span className='flex flex-col items-center gap-[5px]'>
              <h2 className='text-white text-2xl font-semibold'>12M+</h2>
              <p className='text-gray-400'>QUERIES</p>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
