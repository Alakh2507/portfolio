import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Mywork from './Mywork'
import Contact from './Contact'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'

const Header = () => {

    const [sidebar, setSidebar] = useState(true)

    return (
        <>
            {/* overlay */}
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

            <Navbar sidebar={sidebar} setSidebar={setSidebar} />

            <div className='flex flex-col w-full  px-2 sm:px-10 md:px-[6%] lg:px-[7%] xl:px-[9%] '>
                <Home />
                <About />
                {/* <Services /> */}
                <Mywork />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Header