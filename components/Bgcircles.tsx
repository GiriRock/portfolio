import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const Bgcircles = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,3,2,1],
        opacity:[0.1,0.3,0.5,0.7,0.9,1],
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping' />
        <div className='absolute z-20 border border-[#F7AB0A] rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
        <div className='absolute border border-[#333333] rounded-full opacity-20 h-[800px] w-[800px] mt-52' />
    </motion.div>
  )
}

export default Bgcircles