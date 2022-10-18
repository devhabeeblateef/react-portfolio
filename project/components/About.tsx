import { motion} from 'framer-motion'
import React from 'react'
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

    className='flex flex-col relative text-center 
    h-screen md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center'>
        <h3 className='lg:hidden absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
            </h3>

            <motion.img
            initial={{
                x: -200,
                opacity:0
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{x:0, opacity:1}}
            src="/about.jpeg" 
            className='lg:hidden mt-[120px] mb-20 md:mb-0 flex-shrink-0 w-48
            h-48 rounded-full object-cover md:rounded-lg
            md:w-64 md:h-95 xl:w-[400px] xl:h-[300px]'/>

            <div className='lg:w-96 lg:mr-[650px] space-y-10 -mt-20 px-0 md:px-10'>
                <h4 className='text-3xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little </span>
                    background
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat quaerat fugit cupiditate, molestiae id non, ducimus dolorum veritatis animi eum quas aliquam soluta enim nesciunt deserunt molestias, totam atque.
                </p>
            </div>
        </motion.div>
  )
}

export default About