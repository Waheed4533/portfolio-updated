import React from 'react'
import {motion} from 'framer-motion'
import { skill } from '../../../typings'
import { urlForImage } from '../../../sanity/lib/image'
type Props = {
    skill: skill
    directionLeft?: boolean
}

export default function Skill({skill,directionLeft}: Props) {
  return (
    <div className='group flex relative cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
           opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        src={urlForImage(skill.image)}
        alt='typescript'
        className='rounded-full border border-gray-500 object-cover w-9 h-9 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-9 h-9 xl:w-26 xl:h-26 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-black opacity-100 '>{skill.progress}</p>
            </div>
        </div>
    </div>
  )
}