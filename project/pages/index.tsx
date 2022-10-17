import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Homepage from '../components/Home'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-hero bg-center bg-cover text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0'>
      <Head>
        <title>Create Next App</title>
        
        <meta name="description" content="Generated by create next app" />
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
      </div>
  )
}

export default Home
