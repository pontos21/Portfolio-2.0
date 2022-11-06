import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
   const [text, count] = useTypewriter({
    words: [
        "Hey Hey, My Name Is Paul 👋",
        "Chronically Fuelled By Caffeine ☕️",
        "<CodeIsLife.jsx />"
    ],
    loop: true,
    delaySpeed: 2000,
   }) 
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1><span><p>{text}</p>
        <Cursor cursorColor='#F7AB0A' /></span></h1>
    </div>
  )
}