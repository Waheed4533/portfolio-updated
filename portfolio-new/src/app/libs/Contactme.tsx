"use client"
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
export default function Contactme() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = 'mailto:immykhan453328@gmail?subject={data.subject}&body={data.message}'
      }

  return (
<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
<h3 className='uppercase absolute top-16 tracking-[20px] text-gray-500 text-2xl animate-pulse'>Contact</h3>
<div className='flex flex-col space-y-2 absolute bottom-0 top-28 w-full '>

  <h4 className='text-2xl font-semibold text-center'>
  I have just what you need. <span className='underline decoration-[#F7AB0A]/50'> Are you prepared to chat?</span>
  </h4>

  
  <div className='space-y-3 '>
<div className='flex items-center space-x-5 justify-center'>
<PhoneIcon className='text-[#F7AB0A]/50  h-7 w-7 '/>
<p className='text-xl'>+92333-5473238</p>
</div>
<div className='flex items-center space-x-5 justify-center'>
<EnvelopeIcon className='text-[#F7AB0A]/50  h-7 w-7 '/>
<p className='text-xl'>immykhan453328@gmail.com</p>
</div>
<div className='flex items-center space-x-5 justify-center'>
<MapPinIcon className='text-[#F7AB0A]/50  h-7 w-7 '/>
<p className='text-xl'>Islamabad,Pakistan</p>
</div>
  </div>

<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mt-10 w-fit mx-auto '>
<div className='flex space-x-2 '>
    <input {...register('name')} className='contactinput' type="text" placeholder='Name' />
    <input {...register('email')} className='contactinput' type="email" placeholder='Email' />
</div>
    <input {...register('subject')} type="text" className='contactinput' placeholder='Subject' />

    <textarea {...register('message')} placeholder='Message' className='contactinput' />
    <button className='bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
</form>
</div>
</div> 
  )
  
}