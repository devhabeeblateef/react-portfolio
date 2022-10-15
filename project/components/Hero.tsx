import React from 'react'

import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'> 
     <BackgroundCircles/>
     <h1>
      <span>Hello World!</span>
     </h1>
    </div>
  )
}

export default Hero