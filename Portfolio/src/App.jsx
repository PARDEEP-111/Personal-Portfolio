import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"


function App() {
  return (
    <div className=" m-0">
     <NavBar/>
     <Hero/>
     <TechStack/>
     <Projects/>
    </div>
  )
}

export default App
