import React, { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectImg } from "../assets/projectdata.js";
import { ThemeContext } from "../context/ThemeContext.jsx";


const Projectdetail = () => {
    const { darkMode } = useContext(ThemeContext)

    const { id } = useParams();

    const result = ProjectImg.find(
        item => item.id === Number(id)
    );

    if (!result) {
        return (
            <div className="text-white text-center py-20">
                Project Not Found
            </div>
        );
    }

    return (
        <div className="
      min-h-screen
      
      text
      px-6
      md:px-12
      xl:px-24
      py-12
      pb-20
    ">

            <div className="max-w-7xl mx-auto">

                {/* ================= HERO SECTION ================= */}
                <div className="text-center">

                    {/* Title */}
                    <h1 className={`${darkMode ? "text-white" : " text-black"}
            text-5xl
            pb-4
            md:text-6xl
            font-bold
            text-black
        
                    `}>
                        {result.title}
                    </h1>

                    {/* Short Content */}
                    <p className="
            text-md
            mt-6
            max-w-3xl
            mx-auto
            leading-6
          ">
                        {result.content}
                    </p>

                </div>


                {/* ================= DESCRIPTION SECTION ================= */}
                <div className="
          mt-24
          grid
          lg:grid-cols-2
          gap-14
          items-start
        ">

                    {/* Left */}
                    <div>

                        <h2 className="
              text-3xl
              font-bold
              mb-6
            ">
                            About This Project
                        </h2>

                        <p className="
            
              leading-8
              text-[17px]
            ">
                            {result.description}
                        </p>

                    </div>

                    {/* Right */}
                    <div className="
            bg-white
            border
        
            rounded-3xl
            p-8
            backdrop-gray-300
          ">

                        <h2 className=" text-2xl font-semibold mb-6">
                            Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {result.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className={` ${darkMode ? "text-black bg-blue-300" : "bg-blue-500/20 "} px-4 py-2 rounded-full border   border-blue-400/20 text-sm `}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="
              flex
              gap-4
              mt-10
              flex-wrap
            ">

                            {result.live && <a
                                href={result.live}
                                target="_blank"
                                rel="noreferrer"
                                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-blue-500
                  hover:bg-blue-600
                  transition-all
                  duration-300
                "
                            >
                                Live Demo
                            </a>}

                            <a
                                href={result.github}
                                target="_blank"
                                rel="noreferrer"
                                className={`${darkMode ? "text-black" : "bg-blue-500/20 "}
                  px-6
                  py-3
                  rounded-xl
                  border
                  
                  bg-white/10
                  hover:bg-white/20
                  transition-all
                  duration-300
                                `}
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= IMAGE SECTION ================= */}
                <div className="slider relative overflow-hidden mt-16">

                    {/* Left Fade */}
                    {/* <div className="absolute left-0 top-0 h-full w-32 z-10 "> </div> */}


                    {/* Right Fade */}
                    {/* <div className=" absolute right-0 top-0 h-full w-32 z-10 "></div> */}

                    {/* Slider */}
                    {/* <div className=" flex gap-6 animate-scroll  w-max ">

                        {[...result.images, ...result.images].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className="w-[500px] h-[300px] object-cover rounded-3xl flex-shrink-0 shadow-2xl border  border-white/10  hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                            />
                        ))}

                    </div> */}

                </div>


            </div>
        </div>
    );
};

export default Projectdetail;