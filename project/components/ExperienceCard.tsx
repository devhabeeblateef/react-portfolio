import React from 'react'
import {motion} from 'framer-motion'
import Images from 'next/image'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 cursor-pointer
    transition-opacity duration-200 overflow-hidden'>
        <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-center"
        src="/Netflix.png" alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>Front-end Engineer</h4>
            <p className='font-bold text-1xl mt-1'>Netflix</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="/netflix.png" alt=""/>
                <img className="h-10 w-10 rounded-full" src="/netflix.png" alt=""/>
                <img className="h-10 w-10 rounded-full" src="/netflix.png" alt=""/> 
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard