import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x: 0}}
            src="netflix.png"
            className='rounded-full border border-gray-500 object-cover
            w-20 h-20 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-gray w-20 h-20 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-base font-bold text-black-500 opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill