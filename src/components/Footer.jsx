import React from 'react'

import icon from '../../images/icon-facebook.svg'
import iconTwo from '../../images/icon-twitter.svg'
import iconThree from '../../images/icon-pinterest.svg'
import iconFour from '../../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='bg-black w-full font-poppins '>
        <div className='container mx-auto px-12'>
            <div className='flex flex-col items-center justify-center lg:justify-between  lg:flex-row lg:items-start py-24'>
                <div>
                <h1 className='text-white text-6xl lg:text-3xl font-normal'>Shortly</h1>
                </div>      
                <div className='flex flex-col justify-center items-center lg:items-start lg:flex-row gap-8 lg:gap-20 w-full'>
                    <ul className='mt-20 space-y-4 text-center lg:mt-0'>
                        <li className='text-white font-norma text-xl mb-12'>Features</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Link Shortening</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Branded Links</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Branded Links</li>
                    </ul>
                    <ul className='mt-20 space-y-4 text-center  lg:mt-0'>
                        <li className='text-white font-norma text-xl mb-12'>Resources</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Blog</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Developers</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Support</li>
                    </ul>
                    <ul className='mt-20 space-y-4 text-center  lg:mt-0'>
                        <li className='text-white font-norma text-xl mb-12'>Company</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>About</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Our Team</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Careers</li>
                        <li className='text-neutral-grayishViolet font-norma text-lg '>Contact</li>
                    </ul>

                </div>
                <div className='flex flex-row gap-8 mt-14  lg:mt-0'>
                    <img src={icon} alt="" />
                    <img src={iconTwo} alt="" />
                    <img src={iconThree} alt="" />
                    <img src={iconFour} alt="" />
                   

                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer