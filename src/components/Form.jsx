import React, { useState } from 'react'
import toast from 'react-hot-toast'

import shortenMobile from '../../images/bg-shorten-mobile.svg'
import axios from 'axios'
import Links from './Link'
import useUrlStore from '../hooks/useUrlStore'

const Form = () => {

  const addUrl = useUrlStore(state => state.addUrl)

  const [value, setValue] = useState('')
  const [inputError, setInputError] = useState(false)
  


  const handleSubmit = async () => {
    try {

      if(!value.length){

        setInputError(true)
        toast.error('Veuillez rentrer une URL valide')
       
       
        return;

      }

      const cachedUrl = JSON.parse(localStorage.getItem(`shortened_${value}`))

      if(cachedUrl){
        addUrl(cachedUrl);
        toast.success('URL récupérée du cache');
        return
      }

      const res =  await axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`)
      console.log(res)
      const shortenedUrl = res.data.result
      addUrl(shortenedUrl)

      localStorage.setItem(`shorten_${value}`, JSON.stringify(shortenedUrl));


      toast.success('Bravo')

    }catch(e){
      console.log(e)
      toast.error('Something went wrong');
    }

  }
  return (
    
        <div className='mx-auto container relative px-12 font-poppins'>
           <div className='  z-10 bg-cover lg:w-full flex justify-center rounded-xl mt-16 xl:mx-auto xl:w-3/4' style={{backgroundImage: `url(${shortenMobile})`}}>
                <div className=' flex flex-col p-6 gap-4 rounded-xl lg:items-center  lg:flex-row lg:w-full lg:h-36 ' >
                    <input onChange={(e) => {
                       setInputError(false)
                       setValue(e.target.value)}}
                        value={value}
                        className={`rounded-lg h-14 p-4 w-72 placeholder:text-neutral-grayishViolet bg-white outline-none border  lg:basis-3/4 ${inputError ? 'border-red-600 placeholder-red-600' : 'focus:border-cyan-400'}`} placeholder='Shorten a link here...' type="text" name="" id="" />
                    <button onClick={handleSubmit}  className=' bg-teal-400  h-14 rounded-lg text-white lg:basis-1/5 hover:opacity-80 transition '>Shorten it!</button>
                </div> 
              
            </div>
           
        </div>
        
      
            
            
           
           
    
  )
}

export default Form