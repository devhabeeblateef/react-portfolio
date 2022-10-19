import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}

    className='flex flex-col relative text-center 
    h-screen md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center w-screen mr-[700px] xl:-ml-[350px]'>

        <h3 className='lg:hidden absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
            justify-center p-20 md:p-44 h-screen'>
                <motion.img
                initial={{y: -300, opacity:0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                    src="/Netflix.png"
                    className='w-28 h-28 mt-24'
                    alt=""/>
                    
    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-3xl font-semibold text-center'>
            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i +1} of 3 UPS Clone</span>
            </h4>
            <p className='text-base text-center md:text-left w-96 mr-[60%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam perspiciatis illum! Facere earum cum voluptates omnis distinctio nulla dignissimos in veniam saepe voluptatibus iste, voluptas sint dolorum? Rerum, maxime.
            </p>
            </div>
            </div>
    ))}
    </div>
    {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div> */}
    </motion.div>
  )
}

export default Projects