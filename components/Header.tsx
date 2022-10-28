import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../typing'

type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    const mailto = ()=>{
        open('mailto:giridharanrock@gmail.com')
    }
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-19 xl:items-center p-5 bg-transparent'>
            {/* Icons (Social) */}
            <motion.div
            initial={{
                x : -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x : 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration:1
            }}
            className='flex flex-row items-center'>
                {socials.map((social)=>(
                    
                    <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor='gray'
                    bgColor='transparent'
                />     
                ))}   
            </motion.div>

            {/* Contact Me */}
            <motion.div
            initial={{
                x : 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x : 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration:1
            }}
            className='flex flex-row items-center md:p-3'>
                <div className='md:hidden'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    url='mailto:giridharnrock@gmail.com'
                />
                </div>
                <p className='cursor-pointer uppercase hidden md:inline-flex text-gray-400' onClick={mailto}>Get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header