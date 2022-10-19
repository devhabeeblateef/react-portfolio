import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='lg:mr-[650px] h-screen relative overflow-hidden flex
    flex-col text-lft md:flex-row max-w-full px-10 justify-evenly
    mx-auto items-center'>
        <h3 className='lg:hidden absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl'>
            Experience
         </h3>

         <div className='w-full h-[550px] flex space-x-5 overflow-x-scroll
         scrollbar-thin scrollbar-track-black/20  scrollbar-thumb-[#F78A0A]
         p-5 snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        
         </div>
    </motion.div>
  )
}

export default Experience