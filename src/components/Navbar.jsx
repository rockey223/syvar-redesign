import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='h-20 w-full max-w-[1920px] bg-transparent backdrop-blur-md fixed top-0 left-0 z-50'>
        <div className="blurnav">
            
        </div>
        <div className="flex px-[60px] justify-between items-center h-full">
            <div className="logo h-16 w-16">
                <Image src={'/logo.svg'} width={100} height={100} alt='logo' className='h-full w-full'/>
            </div>
            <div className="contact-btn">
                <button className='h-12 w-32 bg-slate-800 text-white rounded-full uppercase'>contact us</button>
                </div> 
        </div>
    </div>
    </>
  )
}

export default Navbar