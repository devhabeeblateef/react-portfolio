import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {
  companyLogo?: string;
  role?: string;
  company?: string;
  year?: string;
  techOne?: string;
  techTwo?: string;
  techThree?: string;
  summaryPointOne?: string;
  summaryPointTwo?: string;
}

function ExperienceCard({role, company, year, techOne, techTwo, techThree, companyLogo, summaryPointOne, summaryPointTwo}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 cursor-pointer
    transition-opacity mt-[20px] duration-200 overflow-hidden'>
        <motion.img
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px]
        object-cover object-center"
        src={`/${companyLogo}`} alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-1.5xl font-light'>{role}</h4>
            <p className='font-bold text-1xl mt-1'>{company}</p>
            <div className='space-x-3 my-2'>
                <Image width={30} height={30} src={`/${techOne}`} alt=""/>
                <Image width={30} height={30}  src={`/${techTwo}`} alt=""/>
                <Image width={30} height={30}  src={`/${techThree}`} alt=""/> 
            </div>
            <p className='uppercase py-5 text-gray-300'>{year}</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>{summaryPointOne}</li>
                <li>{summaryPointTwo}</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard