import './App.css'
import bgImage from './assets/header-bg-color.png'
import Header from './pages/header.jsx'
import { Routes, Route } from 'react-router-dom'
import Projectdetail from './pages/Projectdetail.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <div className="relative w-full min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <img
        src={bgImage}
        alt="background"
        className="fixed top-0 right-0 w-screen h-screen object-cover opacity-80 z-0"
      /> */}



      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projectdetail/:id" element={<Projectdetail />} />
        </Routes>
      </div>

    </div >
  )
}

export default App
