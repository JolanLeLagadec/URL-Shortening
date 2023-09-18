import React from 'react'

import boostDesktop from '../../images/bg-boost-desktop.svg'

const Boost = () => {
  return (
    <div className='w-full font-poppins bg-blue-950' >
        <div className='mx-auto'>
            <div className='flex flex-col items-center gap-8 py-24'>
                <h1 className='font-semibold text-4xl text-white text-center'>Boost your links today</h1>
                <button className='px-5 py-3 text-white text-xl font-normal bg-cyan-400 rounded-[5rem] hover:opacity-80'>Get Started</button>
            </div>
            
        </div>

    </div>
  )
}

export default Boost