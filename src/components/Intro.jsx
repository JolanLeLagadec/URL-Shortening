import React from 'react'
import desktopMobile from '../../images/illustration-working.svg'
import Navbar from './Navbar'


const Intro = () => {
  return (

<>
    <div className='container mx-auto p-12 font-poppins'>
        <Navbar />
    
        <div className=' flex flex-col lg:flex-row-reverse items-center justify-center overflow-hidden lg:overflow-visible gap-24 lg:gap-0 container '>
            <div className='basis-1/2 lg:basis-2/3 '>
                <img className ="w-[50rem] translate-x-[100px] transform scale-125 lg:scale-150 xl:scale-100" src={desktopMobile} alt="" />
            </div>
            
            <div className='  text-center flex flex-col items-center justify-center lg:block lg:text-left space-y-6 basis-1/2 '>
                <p className='font-bold leading-[5rem] text-6xl w-[30rem] '>More than just shorter links</p>
                <p className='text-xl leading-8 text-neutral-grayishViolet w-[30rem] lg:w-[35rem]'>Build your brand's regonition and get detailmed insights on how your links are performing.</p>
                <button className=' p-4 text-xl px-8 bg-teal-300 text-white rounded-[5rem] border hover:opacity-80 hover:border-black transition'>Get Started</button>
            </div>
        </div>

     </div>
</>
      

    
  )
}

export default Intro