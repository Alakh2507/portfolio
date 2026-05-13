import React, { useContext } from 'react'
import msg_icon from '../assets/msg-icon.png';
import mail_icon from '../assets/mail_icon.png';
import phone_icon from '../assets/phone-icon.png';
import location_icon from '../assets/location-icon.png';
import white_arrow from '../assets/white-arrow.png';
import { ThemeContext } from '../context/ThemeContext.jsx';


const Contact = () => {

    const { darkMode } = useContext(ThemeContext)


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {

        event.preventDefault();

        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            "8b425645-e505-4362-85eb-39d73c27ebe3"
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (data.success) {

            setResult("Form Submitted Successfully ✅");

            event.target.reset();

        } else {

            console.log("Error", data);

            setResult(data.message);
        }
    };

    return (

        // <section >
        <div className='w-full py-24 px-5 md:px-12  border-b border-gray-300' id='contact'>
            {/* TOP HEADING */}
            <div className='text-center w-full  sm:max-w-3xl mx-auto'>

                <p className="text-blue-600 font-semibold tracking-[5px] uppercase mb-4">
                    Contact
                </p>

                <h2 className={`${darkMode ? "text-white" : ""} text-2xl  sm:text-3xl md:text-4xl font-semibold font-outfit text-gray-900 leading-tight`}>
                    Let’s Work Together
                </h2>

                <p className={` ${darkMode ? "text-white/90" : "text-gray-500"}  mt-6 text-md leading-5`}>
                    As a MERN Stack Developer, I enjoy building full-stack
                    web applications with clean UI, efficient backend systems,
                    and seamless user experiences. I’m currently seeking
                    internships and job opportunities to grow my skills
                    and contribute to real-world projects.
                </p>
            </div>

            {/* MAIN SECTION */}
            <div className='max-w-7xl mx-auto mt-14 grid lg:grid-cols-2 gap-16 items-start'>

                {/* LEFT SIDE */}
                <div className="bg-white rounded-3xl p-1 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl duration-300">

                    {/* HEADING */}
                    <h3 className="   text-xl text-center text-[#0f172a] font-bold sm:text-3xl mb-6 flex items-center gap-3">

                        <img
                            src={msg_icon}
                            alt="message icon"
                            className=" w-8 sm:w-10"
                        />

                        Get In Touch
                    </h3>

                    {/* PARAGRAPH */}
                    <p className=" text-sm text-center sm:text-start leading-8 sm:text-[17px] text-slate-500 mb-10">
                        Feel free to reach out through the contact form
                        or find my contact information below. I’m always
                        open to discussing new projects, creative ideas,
                        and opportunities.
                    </p>

                    {/* CONTACT LIST */}
                    <div className='space-y-7'>

                        {/* EMAIL */}
                        <div className='flex items-center gap-3 sm: gap-5'>

                            <div className='w-8 h-8 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center'>
                                <img
                                    src={mail_icon}
                                    alt="mail icon"
                                    className="w-3 sm:w-6"
                                />
                            </div>

                            <div>
                                <p className='text-sm text-gray-500 mb-1'>
                                    Email Address
                                </p>

                                <a
                                    href="mailto:alakh.kushwaha1@gmail.com"
                                    className="text-sm sm:text-lg font-semibold text-slate-800 hover:text-blue-600 duration-300"
                                >
                                    alakh.kushwaha1@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className='flex items-center gap-5'>

                            <div className='w-8 h-8 sm:w-14 sm:h-14 rounded-2xl bg-green-50 flex items-center justify-center'>
                                <img
                                    src={phone_icon}
                                    alt="phone icon"
                                    className="w-6"
                                />
                            </div>

                            <div>
                                <p className='text-sm text-gray-500 mb-1'>
                                    Phone Number
                                </p>

                                <a
                                    href="tel:+919532494221"
                                    className=" text-sm sm:text-lg font-semibold text-slate-800 hover:text-blue-600 duration-300"
                                >
                                    +91 9532494221
                                </a>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className='flex items-center gap-5'>

                            <div className='w-8 h-8 sm:w-14 sm:h-14 rounded-2xl bg-red-50 flex items-center justify-center'>
                                <img
                                    src={location_icon}
                                    alt="location icon"
                                    className="w-6"
                                />
                            </div>

                            <div>
                                <p className='text-sm text-gray-500 mb-1'>
                                    Location
                                </p>

                                <h4 className="text-sm sm:text-lg font-semibold text-slate-800">
                                    Lucknow, Uttar Pradesh, India
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white rounded-3xl p-3 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl duration-300">

                    <h3 className=' text-2xl sm:text-3xl font-bold text-slate-900 mb-3'>
                        Send Message
                    </h3>

                    <p className='text-gray-500 mb-8 leading-7'>
                        Fill out the form below and I’ll get back to you
                        as soon as possible.
                    </p>

                    <form
                        onSubmit={onSubmit}
                        className='space-y-3'
                    >

                        {/* Anti Spam */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            className="hidden"
                        />

                        {/* NAME */}
                        <div>

                            <label className="text-[15px] font-semibold text-[#0f172a] block mb-2">
                                Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-full bg-slate-50 p-3 sm:p-4 border border-gray-200 outline-none rounded-2xl text-[16px] text-[#0f172a] duration-300 focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>

                            <label className="text-[15px] font-semibold text-[#0f172a] block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="w-full bg-slate-50 p-3 sm:p-4 border border-gray-200 outline-none rounded-2xl text-[16px] text-[#0f172a] duration-300 focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                            />
                        </div>

                        {/* PHONE */}
                        <div>

                            <label className="text-[15px] font-semibold text-[#0f172a] block mb-2">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your mobile number"
                                required
                                className="w-full bg-slate-50 p-3 sm:p-4 border border-gray-200 outline-none rounded-2xl text-[16px] text-[#0f172a] duration-300 focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div>

                            <label className=" text-sm sm:text-[15px] font-semibold text-[#0f172a] block mb-2">
                                Your Message
                            </label>

                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Enter your message"
                                required
                                className="w-full bg-slate-50 p-2  sm:p-4 border border-gray-200 outline-none rounded-2xl text-[16px] text-[#0f172a] resize-none duration-300 focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                            ></textarea>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-2xl cursor-pointer text-[16px] font-semibold flex items-center gap-3 duration-300 hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-100"
                        >
                            Submit Now

                            <img
                                src={white_arrow}
                                alt="arrow icon"
                                className="w-[18px]"
                            />
                        </button>
                    </form>

                    {/* RESULT */}
                    <span className="block mt-5 text-green-600 font-medium">
                        {result}
                    </span>
                </div>
            </div>
        </div>)


}

export default Contact