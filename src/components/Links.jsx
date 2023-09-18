import React, { useCallback } from 'react'
import Link from './Link'
import useUrlStore from '../hooks/useUrlStore'
import { useEffect } from 'react'

const Links = () => {

  
  const addUrlsToStore = useUrlStore((state) => state.addUrl)

 const getCachedUrls = useCallback(() => {
  const allKeys = Object.keys(localStorage)
  const filteredUrls = allKeys
  .filter(key => key.startsWith('shorten_'))
  
  const cachedUrls = filteredUrls.map(key => JSON.parse(localStorage.getItem(key)));

  return cachedUrls 
}, [])

const cached = getCachedUrls()
console.log(cached)
 


  

  return (
    <div className=' w-full min-w-fit lg:mx-auto lg:px-12'>
      <div className='flex flex-col gap-4'>
            {
              getCachedUrls().map((link) => {
                return <Link key={link.code} shorten={link.short_link} link={link.original_link} />
              })
            }
      </div>
    </div>
  )
}

export default Links