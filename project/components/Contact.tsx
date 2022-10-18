import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';

type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need. {" "}
            <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>

            <div>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#2b2b2b] h-7 w-7 animate-pulse'/>
                <p>0123456789</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#2b2b2b] h-7 w-7 animate-pulse'/>
                <p>@devhabeeb</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#2b2b2b] h-7 w-7 animate-pulse'/>
                <p>123 Developer Lane</p>
                </div>
            </div>

            <form>
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
            </form>
        
        </h4>
        </div>
    </div>
  )
}

export default Contact