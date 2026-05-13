import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-between items-center md:flex-row  mt-7 mb-3  md:mb-7'>

            <div>
                <p className='text-center hidden md:block'>&copy;&nbsp;2025 Alakh Niranjan.</p>
            </div>

            <div className='flex flex-col w-full md:w-auto'>
                <div className='flex flex-row w-full md:max-w-[500px] justify-between   sm:justify-around  items-center  gap-5 md:gap-7 '>
                    <a href="">GitHub</a>
                    <a href="https://www.linkedin.com/in/alakh-niranjan-0411a8253/" target="_blank">LinkedIn</a>
                    <a href="">Twitter</a>
                </div>
                <p className='text-center pt-3 md:pt-0 md:hidden '>&copy;&nbsp;2025 Alakh Niranjan.</p>
            </div>

        </div>
    )
}

export default Footer