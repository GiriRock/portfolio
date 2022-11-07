import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typing'

type Props = {
    experiences: Experience[]
}

const WorkExperience = ({experiences}: Props) => {
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
            className='flex relative h-screen overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {experiences.map((exp)=>(<ExperienceCard key={exp._id} experience={exp}/>))}
            </div>
        </motion.div>
    )
}

export default WorkExperience