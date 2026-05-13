import React from 'react'
import arrow from '../assets/arrow-icon.png'
import moon from '../assets/moon_icon.png'
import Menu from '../assets/menu-black.png'
import ArrowDark from '../assets/arrow-icon-dark.png'
import { useState, useEffect, useContext } from 'react'
import Menudark from '../assets/menu-white.png'
import Sunicon from '../assets/sun_icon.png'
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext.jsx";


const Navbar = ({ sidebar, setSidebar }) => {

    const { darkMode, taggleTheme } = useContext(ThemeContext);




    const [isActive, setIsActive] = useState('home');
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {


        const handleScroll = () => {
            setScrolled(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])





    return (
        <nav className={`w-full fixed flex flex-row justify-between items-center  px-5 py-4 sm:px-6 ${(scrolled > 100) ? `${darkMode ? "bg-[#0f172a]" : "bg-white/50"}  backdrop-blur-lg opacity-100 border-b border-gray-200 shadow-xl` : " "}  md:px-8 lg:px-10 xl:px-[8%]  text-lg z-50`}>

            <p>Alakh Niranjan</p>


            <ul
                className={`
    hidden md:flex flex-row
    px-11 py-3 gap-4 lg:gap-6
    border rounded-full 
    ${(scrolled > 100) ? `border border-gray-200  ${darkMode ? "bg-[#0f172a] text-white" : 'bg-white/50'} font-outfit text-black text-lg shadow-[0px_0px_0px_white]` : "border-gray-500"}

  `}

            >
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-100}
                        activeClass="active-link"
                        className="nav-link cursor-pointer"
                        onClick={() => setIsActive("home")}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-100}
                        activeClass="active-link"
                        className="nav-link cursor-pointer"
                        onClick={() => setIsActive("about")}
                    >
                        About
                    </Link>
                </li>

                {/* <li>
                    <Link
                        to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                        className="nav-link cursor-pointer"
                        onClick={() => setIsActive("services")}
                    >
                        Services
                    </Link>
                </li> */}

                <li>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-100}
                        activeClass="active-link"
                        className="nav-link cursor-pointer"
                        onClick={() => setIsActive("work")}
                    >
                        My Work
                    </Link>
                </li>

                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                        className="nav-link cursor-pointer"
                        onClick={() => setIsActive("contact")}
                    >
                        Contact Me
                    </Link>
                </li>
            </ul>
            <div className='flex flex-row gap-5 items-center'>
                <button>
                    <img onClick={() => taggleTheme()} src={`${darkMode ? Sunicon : moon}`} alt="moon" className='w-6 h-6 cursor-pointer' />
                </button>

                <Link to='contact' smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active-link"
                    className='hidden  lg:flex flex-row justify-center items-center gap-4 border border-gray-500 rounded-full ml-4 px-6 py-3 cursor-pointer  '>
                    Contact
                    <img src={darkMode ? ArrowDark : arrow} alt='arrow' className='w-3 h-3 ' />
                </Link>
                <button className='md:hidden'>
                    <img onClick={() => setSidebar(pre => !pre)} src={`${darkMode ? Menudark : Menu}`} className=' w-8 h-6 md:w-10 md:h-8 cursor-pointer  ml-3 ' alt='Menu' />
                </button>



            </div>

        </nav >
    )
}

export default Navbar