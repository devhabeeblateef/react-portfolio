import {motion} from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
    className='h-screen lg:mr-[650px] relative overflow-hidden flex
    flex-col text-lft md:flex-row max-w-full px-10 justify-evenly
    mx-auto items-center'>

<h3 className='lg:hidden absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl'>
            Skills
         </h3>

         <h3 className='xl:hidden md:hidden lg:hidden abslute top-36 mt-10 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover a skill for current proficiency</h3>

            <div className='grid grid-cols-4 gap-5'>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
    </motion.div>
  )
}

export default Skills