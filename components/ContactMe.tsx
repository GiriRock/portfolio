import React from 'react'
import { PhoneIcon, MapPinIcon , EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typing';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

type Props = {
    pageinfo: PageInfo
}

function ContactMe({ pageinfo }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formdata => console.log(formdata);
    return (
        <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl'>
                Contact Me
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#f7ab0a]/50 underline'>Let's Talk.</span>
                </h4>
                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>{pageinfo.phonenumber}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>{pageinfo.email}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>{pageinfo.location}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} className='contactInput' type="text" placeholder='Name'/>
                        <input {...register('email')} className='contactInput' type="email" placeholder='Email'/>
                    </div>
                    <input {...register('subject')} className='contactInput' type="text" placeholder='Subject'/>
                    <textarea {...register('message')} className='contactInput' placeholder='Message'/>
                    <button type='submit' className='bg-[#f7ab0a] border border-black py-5 px-10 rounded-md text-black text-bold text-lg hover:bg-slate-400/10 hover:text-[#f7ab0a] hover:border-[#f7ab0a] transition-all duration-300'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe