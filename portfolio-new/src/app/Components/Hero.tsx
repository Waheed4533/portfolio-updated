'use client'
// import Backgroundcircles from "../libs/Backgroundcircles"
import Typewriter from "../libs/Typewriter"
import Image from "next/image"
import Link from "next/link"
import { client } from "../../../sanity/lib/client"
import { motion } from 'framer-motion'
async function getherodata() { 
  const hero = await client.fetch(`*[_type == 'pageinfo']{
    role,
    "imageUrl": heroImage.asset->url
  }
`);
    return hero;
  }


export  async function Hero() {
  const data = await getherodata();
  return (
    <div className="h-screen flex flex-col space-y-3 items-center justify-center overflow-hidden text-center">

      <motion.div initial={
        {opacity: 0}
    }
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration:2.5,
    }}
    className='relative flex items-center justify-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border opacity-20 border-[#906e23] rounded-full h-[500px] w-[500px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[560px] w-[560px] mt-52'/>
    </motion.div>

            {/* <img src={data.map((get:any) => get.imageUrl)}  alt="Profile" width={100} height={100} className="relative rounded-full mx-auto object-cover " /> */}
            {data.map((get: any) => (
    <img 
        key={get.id} 
        src={get.imageUrl} 
        alt="Profile" 
        width={100} 
        height={100} 
        className="relative rounded-full mx-auto object-cover" 
    />
))}
         
          
          <div className="z-20">
            <h2 className="uppercase pb-1  tracking-[15px] text-gray-500 text-sm">{data.map((get:any) => get.role)}</h2>
          <h1 className="text-2xl lg:text-3xl text font-semibold px-10">
        <Typewriter/>
          </h1>
          <div className="pt-5 ">
            <Link href="#about">
            <button className="heroButton">About</button></Link>
            <Link href="#experience"><button className="heroButton">Experience</button></Link>
            <Link href="#skills"><button className="heroButton">Skills</button></Link>
            <Link href="#projects"><button className="heroButton">Projects</button></Link>
          </div>
          </div>
    </div>
  )
}