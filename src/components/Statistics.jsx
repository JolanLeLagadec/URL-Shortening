import React from 'react'
import Links from './Links'

import icon from '../../images/icon-brand-recognition.svg'
import iconTwo from '../../images/icon-detailed-records.svg'
import iconThree from '../../images/icon-fully-customizable.svg'


import Card from './Card'

const content = [
  {
    icon: icon,
    title: 'Brand Recognition',
    content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content."
  },
  {
    icon: iconTwo,
    title: 'Detailed records',
    content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.",
    style: 'top-10'
  },
  {
    icon: iconThree,
    title: 'Fully Customizable',
    content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content.",
    style: 'top-20'
  },
]




const Statistics = () => {
  return (
    <div className='bg-gray-200 w-full -mt-24 lg:-mt-22 z-0 font-poppins  h-full '>
      <div className='container mx-auto py-32'>
        <Links />
        <div className='flex flex-col justify-center items-center gap-8 mt-28 '>
          <h1 className='text-3xl font-bold'>Advanced Statistics</h1>
          <p className='max-w-xs leading-7 text-center text-neutral-grayishViolet lg:max-w-lg'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className='w-full '>
        <div className='mx-auto max-w-[20rem] lg:max-w-full flex flex-col lg:flex-row mt-20 justify-center gap-16 lg:gap-6 relative'>

        <div className='bg-cyan-400 h-2 absolute w-full bottom-12 hidden lg:block'>          
        </div>
        <div className='bg-cyan-400 w-2 absolute h-full right-[163px] lg:hidden'>          
        </div>

          {
            content.map((obj) => {
              return <Card key={obj.title} data = {obj}/>
            })
          }
        </div>

      </div>
      </div>
      
     
  
     </div>
           
  
  )
}

export default Statistics