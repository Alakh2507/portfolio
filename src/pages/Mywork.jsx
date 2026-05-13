import React, { useContext } from 'react'
import { ProjectImg } from '../assets/projectdata.js'
import Project from '../components/project.jsx'
import { ThemeContext } from '../context/ThemeContext.jsx'

const Mywork = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div className='flex flex-col w-full items-center mt-20' id='work'>
            <h1 className='text-4xl font-poppins font-medium  text-center'>
                My latest work
            </h1>
            <p className={` ${darkMode ? "text-white/90" : ""} text-center px-[7px]  sm:px-0 max-w-3xl  mx-auto mt-4 leading-relaxed `}>Welcome to my full-stack development portfolio! Explore a collection
                of projects showcasing my expertise in building modern, responsive,
                and scalable web applications using React.js, CSS, Tailwind CSS,
                Node.js, Express.js, and MongoDB.
            </p>

            <div className="max-w-7xl mx-auto px-4 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {ProjectImg.map((item, index) => (
                        <Project
                            key={index}
                            title={item.title}
                            image={item.images[0]}
                            content={item.content}
                            id={item.id}
                            live={item.live}
                            github={item.github}
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Mywork