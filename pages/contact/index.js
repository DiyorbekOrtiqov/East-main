
import React from 'react'
import{BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import  {fadeIn} from '../../variants'
const index = () => {
  return (
    <>
    <div className='h-full[+50px] bg-primary/50'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full sms:pt-[130px]'>
        <div className='flex flex-col w-full max-w-[700px] '>
          <h2 className=' h2 text-center mb-12'>
             Contact
          </h2>


          <form className=' flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='  gap-x-6 w-full sms:flex-cold  lg:flex'>
                <input type='text' placeholder='Full name' className='input' />
                <input  type='text' placeholder='Email' className='input mt-6 lg:mt-0'  />
            </div> 
            <input type='text' placeholder='subject' className='input' />
     
            <textarea placeholder='Message' className='textarea' ></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span>
                Submmit
              </span>
            </button>
          </form>
        </div>
      </div>
       
    </div>
  </>
  )
}

export default index
