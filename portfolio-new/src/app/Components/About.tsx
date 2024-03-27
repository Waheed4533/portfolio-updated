"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { client } from '../../../sanity/lib/client'


async function pageinfo() { 
  const z = await client.fetch(`*[_type == 'pageinfo']{
    backgroundInformation,
    "imageUrl": profilePic.asset->url
  }`)
    return z;
  }



export  async function About() {
  
  const get = await pageinfo();
      
  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1,}}
    transition={{duration:2,}}
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-5 justify-evenly mx-auto items-center '>

                    <h3 className='absolute top-20 uppercase tracking-[24px] text-2xl animate-pulse' style={{ color: 'white', textShadow: '0 0 5px rgba(255, 255, 255, 0.8)' }}>About</h3>

                    <motion.img
                    initial={{
                      x: -200,
                      opacity:0,}}
                  transition={{duration:1.2,}}
                  whileInView={{opacity:1,x:0,}}
                  // viewport={{once: true,}}
                  
                    src={get.map ((e:any)=>e.imageUrl)} alt="profile" 
                    className=' h-40 w-40 -mb-36
                    md:mb-0 flex-shrink-0 rounded-full md:rounded-lg md:w-[270px] md:h-[290px] xl:w-[300px] xl:h-[350px]'/> 
                
                
                <div className=' space-y-1 h-1/4 px-0 mt-2 md:-mt-28 xl:-mt-32 md:px-10 '>
                <h4 className='text-3xl font-semibold'>🌟{" "} <span className='underline decoration-[#F7AB0A]/50'> Unveiling</span>{" "} the  Extraordinary</h4>
                <p className='text-sm font-thin '>{get.map((e:any)=>e.backgroundInformation)}</p>
              
               </div> 
                
    </motion.div>
  )
}