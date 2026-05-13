import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import Close from '../assets/close-black.png'
import CloseWhite from '../assets/close-white.png'
import { ThemeContext } from '../context/ThemeContext.jsx'



const sidebar = ({ sidebar, setSidebar }) => {

    const { darkMode } = useContext(ThemeContext)

    // Overlay
    return (
        <div className={`fixed ${sidebar ? '-right-64 ' : 'right-0 '}  h-screen w-60 ${darkMode ? "bg-[#0f172a]" : "bg-[oklch(98.4%_0.014_180.72)] "} transition-all duration-500  border-l-1 border-gray-300  z-[100]`}>
            <button className='ml-40 mt-8'><img src={darkMode ? CloseWhite : Close} onClick={() => setSidebar(prev => !prev)} alt="Menu" className='w-7 h-7 cursor-pointer ' /></button>
            <ul className='flex flex-col  px-5 mt-25 text-lg gap-5'>
                <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    className=' w-full py-1   hover:border-1 border-gray-300 rounded-sm pl-3'
                >
                    Home
                </Link>
                <Link
                    to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    className=' w-full py-1   hover:border-1 border-gray-300 rounded-sm pl-3'

                >
                    About
                </Link>
                {/* <Link
                    to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    className=' w-full py-1   hover:border-1 border-gray-300 rounded-sm pl-3'

                >
                    Services
                </Link> */}
                <Link
                    to='work'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-60}
                    className=' w-full py-1   hover:border-1 border-gray-300 rounded-sm pl-3'

                >
                    My Work
                </Link>
                <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={20}
                    className=' w-full py-1   hover:border-1 border-gray-300 rounded-sm pl-3'

                >
                    Contact
                </Link>
            </ul>

        </div>
    )
}

export default sidebar