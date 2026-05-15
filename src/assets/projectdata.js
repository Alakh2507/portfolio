import Bookappointment from "./bookappointment.png";
import Blogapp from "./blogapp.png";
import Quickai from "./quickai.png";
import foodhomepage from '../assets/foodhomepage.png'
import responsiveimage from '../assets/responsiveimage.png'
import portfolioimage from '../assets/portfolioimage.png'

import html5 from "./HTML5.png";
import css3 from "./CSS3.png";
import tailwindcss from "./Tailwind CSS.png";
import javaScript from "./JavaScript.png";

import react from "./React.png";
import nextjs from "./Next.js.png"; // fixed
import nodejs from "./Node.js.png";
import express from "./Express.png"; // fixed filename
import mongodb from "./mongodb.png";
import vscode from "./vscode.png";
import github from "./GitHub.png";
import vercel from "./Vercel.png";

export const ProjectImg = [

    {
        id: 2,
        title: "Book Appointment",
        content: "Built a MERN healthcare booking platform with authentication, scheduling, dashboards,online payments, and profile management.",
        description: "Developed a full-stack Doctor Appointment Booking System using the MERN stack (React.js, MongoDB, Express.js, and Node.js). The platform was designed for hospitals and clinics to streamline appointment scheduling and healthcare management. The system included three levels of authentication: Patient, Doctor, and Admin. Patients were able to register, log in, book appointments, and manage their bookings. Doctors could access their dashboard to view appointments, track earnings, and update profile information. Admins managed doctor profiles, appointments, and overall platform activities.Integrated secure online payment gateways to enable users to pay appointment fees digitally. The application featured responsive UI design, authentication and authorization, dashboard management, and real-time appointment handling.",
        images: [Bookappointment],
        tech: ["JavaScript", "React.js", "CSS", "Node.js", "MongoDB", "Express", "JWT", "Stripe payment gateway"],
        live: "https://doctordeployment-project-ylp1.vercel.app/",
        github: "https://github.com/Alakh2507/DoctorAppointment",
    },
    {
        id: 1,
        title: "food ordering website ",
        content: "A full-stack food ordering and delivery web application with secure authentication, shopping cart, online payment integration, and order management features.", description:
            "Developed a full-stack food ordering web application using React JS, Node.js, Express.js, and MongoDB. Implemented user authentication and authorization features, allowing users to create accounts and securely log in. Built shopping cart functionality to enable users to add food items and place orders seamlessly. Integrated the Stripe payment gateway for secure online payments and developed an order status tracking system. Also created an admin panel to manage food items, orders, and user activities efficiently.",
        images: [foodhomepage, Bookappointment, Blogapp, Quickai],
        tech: ["javaScript", "React.js", "CSS", "Node.js", "MongoDB", "Express", "JWT",],
        live: "https://food-delivery-xi-gilt.vercel.app/",
        github: "https://github.com/Alakh2507/FoodDelivery",
    },

    {
        id: 3,
        title: "Responsive webpage",
        content: "Built a responsive college website using React JS with smooth scrolling, image slider, and functional contact form integration.",
        description:
            "Developed a responsive college/university website using React JS with smooth scrolling, interactive sliders, and a working contact form. Implemented a modern UI design with mobile responsiveness and email inquiry functionality for user communication.",
        images: [responsiveimage, Bookappointment, Blogapp],
        tech: ["javaScript", "React", "CSS"],
        live: "",
        github: "https://github.com/Alakh2507/Responsivepage",
    },

    {
        id: 3,
        title: "Portfolio Web Page",
        content: "Built a modern and responsive portfolio website using React JS with smooth navigation, interactive UI, and contact form integration.",
        description:
            "Developed a personal portfolio website with a clean and responsive design using React JS. Implemented smooth scrolling navigation, project showcase sections, responsive layouts, and a functional contact form to enhance user interaction and accessibility.",
        images: [portfolioimage, Bookappointment, Blogapp],
        tech: ["javaScript", "React", "Tailwind css"],
        live: "",
        github: "https://github.com/Alakh2507/portfolio",
    },




];

export const techIcon = [
    {
        image: html5,
        name: "HTML5",
    },
    {
        image: css3,
        name: "CSS3",
    },
    {
        image: javaScript,
        name: "JavaScript",
    },
    {
        image: tailwindcss,
        name: "Tailwind CSS",
    },
    {
        image: react,
        name: "React.js",
    },
    {
        image: nextjs,
        name: "Next.js",
    },
    {
        image: nodejs,
        name: "Node.js",
    },
    {
        image: express,
        name: "Express.js",
    },
    {
        image: mongodb,
        name: "MongoDB",
    },
    {
        image: github,
        name: "GitHub",
    },
    {
        image: vscode,
        name: "VS Code",
    },
    {
        image: vercel,
        name: "Vercel",
    },
];