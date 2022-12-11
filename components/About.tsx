import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing'
import { urlFor } from '../sanity'

type Props = {
    pageinfo: PageInfo
}

const About = ({pageinfo}: Props) => {
    return (
        <motion.div 

            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}

            className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img

                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1
                }}
                className='-mb-20 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]'
                src={urlFor(pageinfo?.aboutpic).url()} />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-base'>
                Hi, I'm Giridharan a computer science major who is interest in coding and exploring new technologies. I'm fullstack developer who loves javascript and trying to learn typescript.
                </p>
            </div>

        </motion.div>
    )
}

export default About