"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Experiencecard from '../libs/Experiencecard'
import {client} from '../../../sanity/lib/client'

export async function getExperience() { 
  const Exp = await client.fetch(`*[_type == 'experience']{
    ...,
    technologies[]->,
    "imageUrl": companyImage.asset->url
  }`);
    return Exp;
  }
export  async function Experiencee() {
  const getexp = await getExperience()
  return ( 
    <motion.div  key='unique-key' 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-full justify-evenly mx-auto items-center px-10 '>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl animate-pulse custom-pulse  '>experience</h3>
      <div className='flex snap-x snap-mandatory overflow-x-scroll w-full  space-x-2 p-10 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-400 scrollbar-thin'>
        {getexp.map((exp:any)=>(
          <Experiencecard key={exp._id} exp={exp} />
        ))}
      </div>
    </motion.div>
  )
}