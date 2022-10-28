import React from 'react'
import { motion } from 'framer-motion'
import Skillone from './Skillone'
import { Skill } from '../typing'

type Props = {
  skills: Skill[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500'>
        Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-4 justify-center'>
        {skills.map((skill)=>(<Skillone key={skill._id} skill={skill}/>))}
      </div>

    </motion.div>
  )
}

export default Skills;