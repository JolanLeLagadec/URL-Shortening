
import { HiOutlineMenu} from 'react-icons/hi'

const Navbar = () => {
  return (
  
      <div className=' flex justify-between items-center mb-16  '>
          <div className='flex items-center '>
              <h1 className='font-bold text-3xl '>Shortly</h1>
              <ul className='hidden space-x-10 text-neutral-gray ml-16 lg:flex  transition'>
                <li className='font-semibold hover:text-neutral-veryDarkViolet cursor-pointer'>Features</li>
                <li className='font-semibold hover:text-neutral-veryDarkViolet cursor-pointer'>Pricing</li>
                <li className='font-semibold hover:text-neutral-veryDarkViolet cursor-pointer'>Resources</li>
              </ul>
            </div>
            <div>
              <ul className='hidden items-center gap-10 lg:flex'>
                <li className='font-semibold hover:text-neutral-veryDarkViolet cursor-pointer text-neutral-gray' >Login</li>
                <li className='bg-primary-cyan px-4 py-2 rounded-[4rem]  hover:opacity-80 transition'>
                  <span className="text-white cursor-pointer ">Sign Up</span>
                </li>
              </ul>
            <HiOutlineMenu className="lg:hidden" size={44} />
            </div>
        </div>
  
    

   
    

 
  )
}

export default Navbar