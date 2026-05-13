import React, { useContext } from 'react'
import Profile from '../assets/alakh_fullimage.png'
import CodeImg from '../assets/code-icon.png'
import educationImg from '../assets/edu-icon.png'
import ProjectImg from '../assets/project-icon.png'
import AlakhMern from '../assets/alakh_profile.png'
import ProjectIconDark from '../assets/project-icon-dark.png'
import CodeDark from '../assets/code-icon-dark.png'
import EduIconDark from '../assets/edu-icon-dark.png'
import { techIcon } from '../assets/projectdata.js'
import { ThemeContext } from '../context/ThemeContext.jsx'


const About = () => {

    const { darkMode } = useContext(ThemeContext);




    return (
        <div className='w-full px-2 sm:px-0 mt-[120px] ' id='about'>
            <p className='text-lg text-center text-[15px]'>Introduction</p>
            <h2 className='text-4xl text-center font-base font-poppins font-medium'>About Me</h2>

            <div className='flex flex-col justify-between lg:flex-row  xl:justify-around mt-15'>

                <div className='flex justify-center '>
                    <img
                        src={Profile}
                        alt="Profile"
                        className='object-cover w-60 h-80 rounded-lg xl:w-80 xl:h-100'
                    />
                </div>

                <div className='flex flex-col  gap-8 md:gap-10 items-center xl:gap-12'>

                    <div className="max-w-[700px] text-start mt-10">

                        <p
                            className={` ${darkMode ? "text-white/90" : "text-gray-700"} text-sm sm:text-lg leading-7 tracking-wide`}
                        >
                            Passionate MERN Stack Developer with <span className='text-blue-700 font-outfit font-semibold'>6 months of professional
                                experience at Webtechgen, Lucknow, India.</span>  Skilled in building
                            responsive and user-friendly web applications using React.js,
                            Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS.
                        </p>

                    </div>

                    <div className='flex flex-wrap w-full items-center justify-center sm:flex-row  gap-3  xl:gap-4 '>
                        <div className='flex flex-col  border border-gray-500 rounded-md  min-h-[150px]  min-w-[320px] sm:min-w-0 sm:max-w-[200px]  pl-4 sm:pl-6  pr-[2px] h-auto py-4 gap-2   hover:shadow-[4px_4px_0px_black] active:shadow-[4px_4px_0px_black] transition delay-50 duration-500 hover:-translate-y-2 active:-translate-y-2 '>
                            <img src={darkMode ? CodeDark : CodeImg} alt="Code Icon" className='w-7 h-7' />
                            <p className='font-outfit '>Languages</p>
                            <p className={darkMode ? "text-white/70" : "text-gray-700"}>JavaScript, HTML, CSS React.js Nodejs </p>
                        </div>

                        <div className='flex flex-col  border border-gray-500 rounded-md  min-h-[150px]  min-w-[320px] sm:min-w-0 sm:max-w-[200px] pl-4 sm:pl-6 pr-[1px] h-auto py-4 gap-2 hover:shadow-[3px_3px_0px_black] active:shadow-[4px_4px_0px_black] transition delay-50 duration-500 hover:-translate-y-2 active:-translate-y-2'>
                            <img src={darkMode ? EduIconDark : educationImg} alt="Code Icon" className='w-7 h-7' />
                            <p className='font-outfit'>Education</p>
                            <p className={darkMode ? "text-white/70" : "text-gray-700 "}>B.tech in Computer Science & Engineering</p>
                        </div>

                        <div className='flex flex-col  border border-gray-500 rounded-md  min-h-[150px]  min-w-[320px] sm:min-w-0 sm:max-w-[200px]  pl-4 sm:pl-6  pr-[2px] h-auto py-4 gap-2 hover:shadow-[3px_3px_0px_black] active:shadow-[4px_4px_0px_black]  transition delay-100 duration-600 hover:-translate-y-2 active:-translate-y-2'>
                            <img src={darkMode ? ProjectIconDark : ProjectImg} alt="Code Icon" className='w-7 h-7' />
                            <p className='font-outfit'>Projects</p>
                            <p className={darkMode ? "text-white/70" : "text-gray-700"}>Buit more than 5 projects</p>
                        </div>
                    </div>

                    <div className=' px-3 sm:px-4  xl:px-16 '>
                        <p>Tool i use</p>
                        <div className='w-full  flex flex-wrap  justify-center sm:justify-start gap-5 mt-4 '>
                            {
                                techIcon.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative  w-18 h-18 group overflow-hidden rounded-sm border"
                                    >
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt="tech"
                                            className="w-full h-full p-[9px] transition duration-300 group-hover:scale-112 group-active:scale-112 " />

                                        {/* Overlay */}
                                        <div
                                            className={`absolute inset-0 flex  items-center justify-center translate-y-full transition-transform bg-transparent  duration-300 group-hover:translate-y-0  group-active:translate-y-0 text-black cursor-pointer z-200 text-sm font-outfit font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                                            <p className={`${darkMode ? "" : " bg-blue-950 text-white px-5 py-1 text-xs"}`}>{item.name}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default About