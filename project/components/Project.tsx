import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {
    projectimg ?: string,
    projectname ?: string,
    projectsummary ?: string
    projecturl ?: string
}

function Project({projectimg, projectname, projectsummary, projecturl}: Props) {
  return (
    <div>
        <Link href={`${projecturl}`}>
        <article className='flex flex-col rounded-lg items-center space-y-7
            flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 cursor-pointer
            transition-opacity mt-[70px] duration-200 overflow-hidden'> 
               <motion.img
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2}}
                    src={`/${projectimg}`}
                    className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px]
                    object-cover object-center'
                    alt=""/>
                    
    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-3xl font-semibold text-center'>
            <span className='underline decoration-[#B6D0E2]/50'>
                {projectname}
            </span>
            </h4>
            <p className='text-sm text-center md:text-left w-64 mr-[60%]'>
                {projectsummary}
            </p>
            </div>
            </article>
            </Link>
    </div>
  )
}

export default Project