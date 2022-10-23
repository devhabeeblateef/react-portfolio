import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="hidden mt-10 md:inline-block">
      <h1 className="leading-snug w-28 font-['Poppins'] font-bold ml-16 text-5xl">
        Habeeb Lateef Ayokunle</h1>
      <h3 className="font-['Secular-One'] font-extrabold ml-16 text-5xl mt-12">“</h3>
      <h5 className="ml-16 w-96 font-['Poppins']">
      <strong> Web Developer | Community Developer </strong>
      who specializes in front end.  </h5>
      <p className="ml-16 w-96 mt-3 text-sm text-gray-500">
      Front-end developer with comprehensive experience building clean interfaces. I love
      developing communities and contributing to open source
   <i className='mt-10 -ml-24 absolute'>Galactic Problem Solver - NASA Space Apps 2021</i>
      </p>
    </div>
  )
}