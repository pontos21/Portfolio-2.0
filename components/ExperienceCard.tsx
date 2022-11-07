import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ opacity: 1.2 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480dc320cbb1-1240x1400.png"
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Graduate</h4>
            <p className='font-bold text-2xl mt-1'>Frontend Simplified</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started ... Ended ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard