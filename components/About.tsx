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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
                src={urlFor(pageinfo?.aboutpic).url()} />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis felis eget massa efficitur ornare.
                    Integer dignissim elit id efficitur auctor. Nam nunc enim, mollis eget leo sit amet, volutpat aliquet diam.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent convallis venenatis justo, et ornare quam finibus in.
                    Mauris gravida, ex fermentum interdum porta, erat dui tristique velit, vitae iaculis magna risus ac erat. Aliquam vehicula velit ut arcu ornare suscipit.
                    Vivamus ultricies maximus neque vel commodo. Duis vitae aliquam ex. Nunc molestie nisi non arcu congue fringilla. Curabitur nec maximus dui, eu tempor dolor.
                </p>
            </div>

        </motion.div>
    )
}

export default About