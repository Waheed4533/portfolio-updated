
import React from 'react'
import { motion } from 'framer-motion'
import { Technology } from '../../../typings'
import { urlForImage } from '../../../sanity/lib/image'
import { Experience } from '../../../typings'

type Props = {
  exp:Experience
}

export default async function Experiencecard({exp}: Props) {
 
  return (
    <article key={exp._id} className='flex flex-col flex-shrink-0 items-center rounded-lg w-[500px] space-y-1 md:w-[700px] lg:w-[900px] xl:w-[900px] snap-center bg-[#292929] p-1 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
      
                 <motion.img
         initial={{
             y:-100,
             opacity:0
         }}
         transition={{duration:1.2}}
         whileInView={{opacity:1,y:0}}
         viewport={{once: true}}
         src={exp.imageUrl} alt="exp image" className="rounded-full border border-gray-500 object-cover w-28 h-28 xl:w-32 xl:h-32 items-center filter group-hover:grayscale  object-center " /> 

         <div className='px-0 md:px-8'>
            <h4 className="text-xl font-light">{exp.jobtitle}</h4>
            <p className="font-bold text-xl mt-1">{exp.company}</p>
           <div className='flex space-x-1 my-1'>
     
      {exp.technologies.map((tech) => (
        <img
          key={tech.title}
          className="w-7 h-7 rounded-full"
          src={urlForImage(tech.image)}
          alt={tech.title}
        />
      ))}
           </div>
        <p className='uppercase py-1 text-gray-300 break-words'>{new Date (exp.datestarted).toDateString()} - {exp.iscurrentlyworkinghere ? 'Present' : new Date(exp.dateended).toDateString()} </p>
       
            <ul className='list-disc ml-5 text-lg break-words'>
              {exp.points.map((point,index)=><li key={`${exp._id}-${index}`}>{point}</li>)}
                
               
               
            </ul>
           
         </div>
    </article>

    
  )
}
