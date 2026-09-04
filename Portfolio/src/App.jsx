import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LetsConnect from "./components/LetsConnect"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"


function App() { 
  return (
    <div className="  bg-[#161513] w-full h-full flex flex-col items-center justify-start  text-white  ">
     <NavBar/>
     <Hero/>
     <TechStack/>
     <Projects/>
     <Experience/>
     <LetsConnect/>
     <Footer/>
    </div>
  )
}

export default App
