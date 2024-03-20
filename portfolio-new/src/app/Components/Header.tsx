"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { client } from '../../../sanity/lib/client'
import { Social } from '../../../typings'
export async function getSocial() { 
    const x = await client.fetch('*[_type == "social"]');
      return x;
    }
type headertype = {
    header:Social[]
}

export default async function Header({header}: headertype) {
const res = await getSocial()

  return (
    <header className=' sticky top-1 p-2 flex items-start justify-between max-w-4xl mx-auto z-20 xl:items-start  '>
        <motion.div key='unique key' className='flex flex-row items-center'
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        >
{res.map ((res: any) => (
    <SocialIcon key={res._id} url={res.url} bgColor='transparent'/>
))}     
    </motion.div>

    <motion.div className='flex flex-row items-center text-gray-400 cursor-pointer'
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5,
    }}>
    <SocialIcon className='cursor-pointer' network='email' fgColor='#db4a39' bgColor='transparent'/>
    <p className='uppercase hidden md:inline-flex text-sm text-gray-500 animate-pulse'>get in touch</p>
    </motion.div>

    </header>
    
  )
}