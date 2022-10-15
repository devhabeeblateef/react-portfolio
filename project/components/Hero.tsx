import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:["Hi", "Hello", "Bye"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
        <p>{text}</p>
        <Cursor cursorColor='#F7ABOA'/>
    </div>
  );
}

export default Hero