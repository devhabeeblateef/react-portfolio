import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import {motion} from 'framer-motion'
import Avatar from 'next/image'
import Link from 'next/link'
type Props = {}

function Hero({}: Props) {
  return (
    <div className='lg:fixed mt-12 lg:ml-48 h-screen flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'> 
     <BackgroundCircles/>
     <motion.div 
     initial={{
        opacity: 0,
     }}
     animate={{
      opacity: 1,
     }}
     transition={{
      delay: 3,
      duration: 1,
     }}
     >
     <img
     className='relative object-cover h-32 w-32 mx-auto'
     src='/avatar.png' alt=''/>
     </motion.div>
     <div className='z-20'>
     <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
      Front-End Enigineer</h2>
     <h1 className='text-gray-500 text-2xl lg:text-3xl font-semibold px-10 animate-pulse'>
      <span>@devhabeeblateef</span>
     </h1>


     <div className='pt-5'>
      <Link href="#about"><button className="heroButton">About</button></Link>
      <Link href="#experience"><button className="heroButton">Experience</button></Link>
      <Link href="#skills"><button className="heroButton">Skills</button></Link>
      <Link href="#projects"><button className="heroButton">Projects</button></Link>
     </div>
    </div>
    </div>
  )
}

export default Hero