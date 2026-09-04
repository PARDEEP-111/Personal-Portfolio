import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"


function App() { 
  return (
    <div className=" m-0 bg-[#161513] w-full h-full flex flex-col items-center justify-start overflow-x-hidden text-white  ">
     <NavBar/>
     <Hero/>
     <TechStack/>
     <Projects/>
     <Experience/>
     <Footer/>
    </div>
  )
}

export default App
