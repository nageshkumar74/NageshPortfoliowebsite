import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            nageshgunji123@gmail.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Nageshkumar Gunji. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <a target="_blank" href="https://github.com/nageshkumar74">Github</a>
            <a target="_blank" href="https://www.linkedin.com/in/nageshkumar-gunji/">LinkedIn</a>
            <a target="_blank" href="https://x.com/gunji_nagesh?t=O04X2msidguiGtpqAwFcXQ&s=09">Twitter</a>
        </ul>
    </div>

    </div>
  )
}

export default Footer
