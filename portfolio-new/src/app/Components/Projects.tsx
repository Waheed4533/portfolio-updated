"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import { Project } from '../../../typings'
export async function getprojects() { 
  const z = await client.fetch(`*[_type == 'project']{
    summary,
    linktobuild,
    title,
    technologies[]->,
    "imageUrl": image.asset->url
  }`)
    return z;
  }


export  async function Projects() {
const projects = await getprojects()
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl animate-pulse'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-400'>
        {projects.map((project:any,i:any) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-10 md:p-20 h-screen '>
              <motion.img
              initial={{y:-300,opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              src={project.imageUrl} alt='project image' className='h-[130px] w-[160px] md:h-[200px] md:w-[230px] lg:h-[220px] lg:w-[250px]'/>
              <div className='space-y-2 md:space-y-3 px-0 md:px-10 max-w-6xl'>
                
                 <h4  className='text-xl font-semibold text-center'><span  className=' underline decoration-[#F7AB0A]/50'>Case study {i + 1}of {projects.length}:</span> {project.title}</h4> 
                                
               
                <div className='flex items-center space-x-3 justify-center'>
                  {project.technologies.map((tech:any) => (
                    <img
                      key={tech.title}
                      className='h-5 w-5'
                      src={urlForImage(tech.image)}
                      alt='project skills'
                    />
                  ))}
                </div>
                <p className='text-sm text-center md:text-left'>{project.summary}</p>
              </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-18 bg-[#F7AB0A]/10 left-0 h-[350px]
      -skew-y-12 '/>
      
      </motion.div>
  )
}