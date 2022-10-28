import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typing'
import { urlFor } from '../sanity'

type Props = {
    experience : Experience
}

const ExperienceCard = ({experience} : Props) => {
    const skills = experience.technologies
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden justify-center'>
        <motion.img
        
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{once:true}}

        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companypic).url()} alt="" />

        <div className='px-0 md:px-10 flex flex-col items-center justify-center'>
            <h4 className='text-4xl font-light'>{experience.jobtitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.companyname}</p>
            <div className='flex space-x-2 my-2 items-center justify-center'>
                {skills.map((skill)=>(<img key={skill._id} className='h-10 w-10 rounded-full' src={urlFor(skill.image).url()} alt="" />))}
            </div>
            <p className='text-center uppercase py-5 text-gray-300'>2020 - 2021</p>
            
            
            {/* <ul className='list-disc space-y-4 ml-5 text-lg hidden'>
                <li>Summary PointsSums</li>
                <li>Summary mary PointsSummary</li>
                <li>Summary PointsSummary  Poins</li>
            </ul> */}
        </div>
    </article>
  )
}

export default ExperienceCard