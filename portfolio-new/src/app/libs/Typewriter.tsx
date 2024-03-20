"use client"
import React from 'react'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
type Props = {}

const Typewriter = (props: Props) => {
    const [text,count] = useTypewriter({
        words:[
          "Hi,The Name's Waheed",
          "let code = love + coffee",
          "<Design,run,create & finally coffee/>"
        ],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
    </div>
  )
}
export default Typewriter