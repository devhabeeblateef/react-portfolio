import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    directionLeft?: boolean;
    skill?: string;
    proficiency?: string;
}

function Skill({directionLeft, skill, proficiency}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1}}
            src={`/${skill}`}
            className='object-cover
            w-20 h-20 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale 
            transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-75 transition duration-300
        ease-in-out group-hover:bg-black w-20 h-20 md:w-20 md:h-20 xl:w-20 xl:h-20  z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm font-bold text-black-500'>{proficiency}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill