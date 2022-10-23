import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Homepage from '../components/Home'
import Hero from '../components/Hero'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
    <div className='bg-mybg bg-center bg-cover text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>devhabeeblateef</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Devhabeeblateef" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <Header/>
      <div className="flex">
        <Homepage/>
      {/* Hero */}
      <section id='hero' className='snap-start -mt-[80px] w-screen'>
      <Hero />
      </section>
      </div>
      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id="experience" className='snap-center'>
        <Experience/>
      </section>

      <section id='skills' className='snap-start'>
          <Skills/>
      </section>

      <section id='projects' className='snap-start'>
          <Projects/>
      </section>

      <section id="contact" className='snap-start'>
        <Contact/>
      </section>

      <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='hover:animate-bounce flex items-center justify-center z-20'>
              <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
               src="/avatar.png" alt="Home button" />
            </div>
          </footer>
      </Link>
      </div>
      </div>
  )
}

export default Home
