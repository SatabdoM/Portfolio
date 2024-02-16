import React from 'react'
import face from "../assets/Face.jpeg"

const KnowMe = () => {
  return (
    <div className=' h-max flex flex-col justify-center items-center group'>
        <h1 className='p-10 pb-20 text-4xl font-semibold cursor-pointer group-hover:text-tailwindblue-200  transition duration-500'>Know Me</h1>
        <div className='w-full md:w-8/12  flex flex-col justify-evenly items-center md:flex-row  text-lg '>
        <div className=''>
            <img src={face} alt="" className='h-72 min-w-60 rounded-lg face'/>
        </div>
        <div className='h-full w-3/4 p-8 flex flex-col justify-center '>
            <p className='text-richblack-100'>I am a <b className='group-hover:text-tailwindblue-200 transition duration-500'>Full-Stack Web Developer</b> with experience in building end to end applications in <b className='group-hover:text-tailwindblue-200 transition duration-500'>MERN</b>.
            I love DSA and Competitive Programming and am currently rated <b className='group-hover:text-tailwindblue-200 transition duration-500'>Knight</b>  1900+ on Leetcode and <b className='group-hover:text-tailwindblue-200 transition duration-500'>Pupil</b>   at CodeForces.
            I am Graduating in <b className='group-hover:text-tailwindblue-200 transition duration-500'>2024</b> with a B-Tech in CSE from Kolkata, India.</p>
        </div>
        </div>
        
    </div>
  )
}

export default KnowMe