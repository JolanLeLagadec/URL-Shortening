import React from 'react'

const Card = ({ data }) => {

    const { title, icon, content, style } = data
  return (
    <div className={`bg-white justify-start basis-1/3 relative shadow-lg justify-self-center ${style} `}> 
            <div className='z-20 p-4 rounded-[40rem] mx-auto bg-violet-900 absolute  -top-10 left-[118px] lg:left-[40px]'>
                <img className='' src={icon} alt="bonjour" />
            </div>        
            <div className='flex flex-col p-12 gap-2 '>     
                <h1 className='font-bold text-lg mt-4'>{title}</h1>
                <p className='text-neutral-grayishViolet'>{content}</p>
            </div>
           
            
          </div>
  )
}

export default Card