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
         text-gray-500 text-xl'>
            Experience
         </h3>

         <div className='w-full h-[550px] mt-16 flex space-x-5 overflow-x-scroll
         scrollbar-thin scrollbar-track-black/20  scrollbar-thumb-[#F78A0A]
         p-5 snap-x snap-mandatory'>
            <ExperienceCard companyLogo='vicabia.jfif' role='Web Developer | SEO Manager' company='Vicabia Brand' year='2022-Present'
            techOne='react.png' techTwo='tailwind.png' techThree='html.png' summaryPointOne='
            Built web interfaces' 
            summaryPointTwo='
            SEO/ Web Analytics'/>
            <ExperienceCard companyLogo='gdsc.webp' role='Web Stack Lead | Co-lead' company='Google Developer Students Club' year='2021-Present'
            techOne='flutter.png' techTwo='firebase.webp' techThree='gmail.png' summaryPointOne='
            Hosting GDSC Events' summaryPointTwo='
            Hosting Bootcamps'/>
            <ExperienceCard companyLogo='darmold.png' role='Web Developer | Designer' company='Darmold Surprises' year='2018' 
            techOne='html.png'
            techTwo='css.svg' techThree='javascript.png' summaryPointOne='
            Built web interfaces'
            
            summaryPointTwo='Designed UI prototypes'/>
        
         </div>
    </motion.div>
  )
}

export default Experience