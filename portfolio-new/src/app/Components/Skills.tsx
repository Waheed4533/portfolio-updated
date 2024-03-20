"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Skill from '../libs/Skill'
import { skill } from '../../../typings'
import { client } from '../../../sanity/lib/client'
type Props = {
  skills : skill[]
}
export async function getskills() { 
  const skill = await client.fetch(`*[_type == 'skill']{
    ...,
    progress,
   "imageUrl": image.asset->url
  }`);
    return skill;
  }
export  async function Skills({skills}: Props) {
  const getdata = await getskills()
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
<h3 className='absolute top-20 tracking-[24px] text-gray-500 uppercase text-2xl animate-pulse'>skills</h3>
<h3 className='absolute top-32 tracking-[3px] text-gray-500 uppercase text-sm hover:text-white'> Hover over a skill for currency profieciency</h3>
<div className='grid grid-cols-4 gap-5  -mb-10 md:-mb-10 xl:-mb-15'>
  {getdata.map((skill:any) => (
    <Skill key={skill._id} skill={skill} />
  ))}



</div>

      </motion.div>
  )
}