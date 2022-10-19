import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3]
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}

    className='lg:mr-[650px] h-screen relative overflow-hidden flex
    flex-col text-lft md:flex-row max-w-full px-10 justify-evenly
    mx-auto items-center'>

        <h3 className='lg:hidden absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl'>
            Projects
        </h3>

    <div className='w-full h-[550px] flex space-x-5 overflow-x-scroll
         scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F78A0A]
         p-5 snap-x snap-mandatory'>
        {projects.map((project, i) => (
            <article key={i} className='flex flex-col rounded-lg items-center space-y-7
            flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 cursor-pointer
            transition-opacity mt-[20px] duration-200 overflow-hidden'>
                <motion.img
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2}}
                    src="/Netflix.png"
                    className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
                    object-cover object-center'
                    alt=""/>
                    
    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-3xl font-semibold text-center'>
            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i +1} of 3 UPS Clone</span>
            </h4>
            <p className='text-base text-center md:text-left w-96 mr-[60%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam perspiciatis illum! Facere earum cum voluptates omnis distinctio nulla dignissimos in veniam saepe voluptatibus iste, voluptas sint dolorum? Rerum, maxime.
            </p>
            </div>
            </article>
    ))}
    </div>
    {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div> */}
    </motion.div>
  )
}

export default Projects