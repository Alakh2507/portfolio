import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../pages/Contact";


const Project = ({ title, image, content, id, live, github }) => {

    console.log(id)
    const navigate = useNavigate()

    return (
        <div
            className="
        group
        w-[320px]
        overflow-hidden
        border-3
        
        rounded-2xl
        border border-black-200
        bg-white
        shadow-[3px_3px_0px_black]
        transition-all duration-300
        hover:-translate-y-3
    
      "
        >
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
                    
            h-52 w-full object-contain
            transition-transform duration-500
            group-hover:scale-110
          "
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h2
                    className="
            text-2xl  font-bold text-gray-800
            transition-colors duration-300
            group-hover:text-blue-600
          "
                >
                    {title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                    {content}
                </p>
                <div className="w-full flex flex-row  justify-between items-center">
                    {/* Button */}
                    <button onClick={() => window.open(`/projectdetail/${id}`, "_blank")}
                        className="
            mt-5
            rounded-lg
            bg-black px-5 py-2
            text-sm font-medium text-white
            transition-all duration-300
            hover:bg-blue-600
          "
                    >
                        View Project
                    </button>


                    {live ? <a href={live} target="_blank"
                        className="
            mt-5
            rounded-lg
            bg-black px-5 py-2
            text-sm font-medium text-white
            transition-all duration-300
            hover:bg-blue-600
          "
                    >
                        Live Demo
                    </a> : <a href={github} target="_blank"
                        className="
            mt-5
            rounded-lg
            bg-black px-5 py-2
            text-sm font-medium text-white
            transition-all duration-300
            hover:bg-blue-600
          "
                    >
                        Github
                    </a>







                    }
                </div>
            </div>
        </div>
    );
};

export default Project;