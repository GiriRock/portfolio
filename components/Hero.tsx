import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typing'
import Bgcircles from './Bgcircles'

type Props = {
  pageinfo: PageInfo
}

const Hero = ({ pageinfo }: Props) => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Gamer"],
    loop: true,
    delaySpeed: 1000
  })
  return (
    <div className='h-screen flex flex-col space-y-6 justify-center items-center text-center overflow-hidden'>
      <img
        src={urlFor(pageinfo?.profilepic).url()}
        className='relative rounded-full h-36 w-36 mx-auto object-cover'
        alt="" />
      <Bgcircles />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px] md:tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>Hello I'm Giri. I'm a {text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>

          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>

          <Link href='#skills'>
            <button className='heroButton'>Skill</button>
          </Link>

          <Link href='#contact'>
            <button className='heroButton'>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero