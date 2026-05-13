import React, { useEffect, useState, useContext } from 'react'
import Arrow from '../assets/right-arrow-white.png'
import Download from '../assets/download-icon.png'
import { Link } from 'react-scroll'
import AlakhProfile from '../assets/alakh_niranjanpro.png'
import RightArrow from '../assets/right-arrow-bold-dark.png'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {

    const { darkMode } = useContext(ThemeContext);


    return (
        <div className='flex flex-col w-full items-center justify-center mt-20 ' id='home'>

            <div className='flex flex-col mt-8 items-center gap-4'>
                <img src={AlakhProfile} alt="Profile" className='w-40 h-40  rounded-full' />
                <h1 className=' text-lg font-base'>Hi, I'm Alakh Niranjan</h1>
            </div>

            <h2 className='mt-10 mb-5 text-center text-5xl leading-13 font-outfit  '>MERN Stack Developer <br /> based in India</h2>
            <p className={` ${darkMode ? "text-white/90" : "text-black-500"} text-center  leading-relaxed max-w-[800px] text-sm md:text-base lg:text-lg  `}>
                MERN Stack Developer building modern, scalable, and user-friendly web applications.
                <br />
                I turn ideas into real-world products using React, Node.js, and MongoDB.
            </p>

            <div className='flex gap-5 lg:gap-15 mt-10'>
                <Link to='contact'>
                    <button className={`${darkMode ? "text-white border-blue-800" : "text-white bg-blue-950"}  flex flex-row gap-2 px-5 py-3 items-center justify-center text-md border border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-105 `}>
                        contact me
                        <img src={!darkMode ? RightArrow : Arrow} alt='arrow' className='w-5 h-4' />
                    </button></Link>

                <button className={`${darkMode ? "text-white border-blue-800" : "text-black"}  flex flex-row gap-2 px-5 py-3 items-center justify-center text-md border border-black rounded-full cursor-pointer transition duration-300 ease-in-out hover:scale-105 `}>
                    Resume
                    <img src={Download} alt='arrow' className='w-5 h-4' />
                </button>
            </div>

        </div>
    )
}

export default Home