import React from 'react'
import toast from 'react-hot-toast';

const Link = ({link, shorten}) => {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text successfully copied!');
        toast.success('Copy to clipoboard')
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }
  
  return (
    
    <div className='p-4 bg-white '>
        <div className='flex flex-row justify-between items-center'>
            <p className='font-semibold'>{link}</p>
            <div className='flex flex-row gap-4 items-center'>
                <p className='text-teal-500 font-semibold'>{shorten}</p>
                <button onClick={() => copyToClipboard(shorten)} className='bg-cyan-400 text-white px-6 py-2 rounded-lg hover:opacity-80'>Copy</button>
            </div>

        </div>

    </div>
  )
}

export default Link