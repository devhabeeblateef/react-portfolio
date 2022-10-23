import React from 'react'
import {motion} from 'framer-motion'
import Project from './Project'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3]
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}

    className='lg:mr-[800px] h-screen relative overflow-hidden flex
    flex-col text-lft md:flex-row max-w-full px-5 justify-evenly
    mx-auto items-center'>

        <h3 className='lg:hidden absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-xl'>
            Projects
        </h3>
        <p className='lg:hidden opacity-10 absolute top-[120px] lowercase tracking-[2px] text-[10px]'>Swipe left to see more</p>
    <div className='w-full h-[550px] flex space-x-5 overflow-x-scroll
         scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F78A0A]
         p-5 snap-x snap-mandatory'>
            <Project projectimg='Netflix.png' projectname='Netflix Clone' projectsummary="
            A Netflix look-alike created with React.js, Tailwind.css and Redux. It is fully responsive on Mobile, Tablet and Desktop.
            The movie database was gotten from TMDB. Click to view live project" projecturl='https://netflix-clone-9ab5b.web.app/'/>
            <Project projectimg='instagram.webp' projectname='Instagram Clone' projectsummary='
            An Instagram look-alike created with Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil. It is fully responsive on Mobile, Tablet and Desktop. Click to view live project.'
            projecturl='https://instagramcloneapp-virid.vercel.app/'/>
    </div>
    {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div> */}
    </motion.div>
  )
}

export default Projects