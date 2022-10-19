import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { SubmitHandler, useForm} from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

function Contact({}: Props) {
    const { register,handleSubmit } = useForm<Inputs>();

        const onSubmit :SubmitHandler<Inputs> = (formData) =>
            window.location.href = `mailto:habeeblateef002@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email})`;

  return (
    <div className='lg:mr-[650px] h-screen relative overflow-hidden flex
    flex-col text-lft md:flex-row max-w-full px-10 justify-evenly
    mx-auto items-center'>
        <h3 className='hidden absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex mt-16 flex-col space-y-10'>
        <h4 className='text-3xl font-semibold text-center'>
            I have got just what you need. {" "}
        </h4>
            <div>
                <div className='flex my-2 items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#2b2b2b] h-5 w-5 animate-pulse'/>
                <p>0123456789</p>
                </div>

                <div className='flex my-2 items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#2b2b2b] h-5 w-5 animate-pulse'/>
                <p>@devhabeeb</p>
                </div>

                <div className='flex mt-2 items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#2b2b2b] h-5 w-5 animate-pulse'/>
                <p>123 Developer Lane</p>
                </div>
            </div>
            

            <form onSubmit={handleSubmit(onSubmit)} className='flex w-96 flex-col mr-24 space-y-2 mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" type="text" className='contactInput'/>
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                <textarea {...register('message')} placeholder='Message' className='min-h-10 max-h-32 contactInput'/>
                <button
                 type="submit" className='bg-[#F7A80A] w-[470px] py-5 px-10 rounded-md text-black font-bold text-lg'>
                    Submit
                 </button>
            </form>
        
        </div>
        </div>
  )
}

export default Contact