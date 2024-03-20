'use client'
import Backgroundcircles from "../libs/Backgroundcircles"
import Typewriter from "../libs/Typewriter"
import Image from "next/image"
import Link from "next/link"
import { client } from "../../../sanity/lib/client"
import { PageInfo } from "../../../typings"
import { urlForImage } from "../../../sanity/lib/image"
import { get } from "http"
async function getherodata() { 
  const hero = await client.fetch(`*[_type == 'pageinfo']{
    role,
    "imageUrl": heroImage.asset->url
  }
`);
    return hero;
  }
type herotype = {
  hero: PageInfo
}

export default async function Hero({hero}: herotype) {
  const data = await getherodata();
  return (
    <div className="h-screen flex flex-col space-y-3 items-center justify-center overflow-hidden text-center">
          <Backgroundcircles />
       
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