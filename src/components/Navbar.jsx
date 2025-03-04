import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div id='navbar' className='w-full max-w-[1920px] fixed left-0 z-50 opacity-0'>
        <div className="blurnav">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="relative z-[55] flex px-[60px] max-sm:px-[20px]  justify-between items-center h-full">
            <div className="logo h-16 w-16">
                <Image src={'/logo.svg'} width={100} height={100} alt='logo' className='h-full w-full'/>
            </div>
            <div className="contact-btn">
                <button className='h-12 w-32 bg-slate-800 text-white font-semibold rounded-full uppercase'>contact us</button>
                </div> 
        </div>
    </div>
    </>
  )
}

export default Navbar