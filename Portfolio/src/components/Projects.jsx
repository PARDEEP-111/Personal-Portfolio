// Projects.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHorizontalScroll } from "./useHorizontalScroll";
import Cards from "./Cards";

function Projects() {
  const projects = [
    {
      img: "https://wrapmarketusercontent.com/assets/items/thumb/c6f2cb86c93597ce849d40c3f3832244ed1642fa11f9e077d4711c9a847c1d91.webp?v=1753371526",
      title: "E-commerce Website",
      description: "A responsive e-commerce website built with React and Node.js.",
    },
    
    
    


  ];

  const { scrollRef, scroll } = useHorizontalScroll(370);

  return (
    <div  id="projects" className="bg-[#161513] scroll-mt-20 text-white p-2 flex flex-col w-full items-center">
      <h1 className="text-4xl font-bold p-5">Projects</h1>

      <div className="relative w-full mt-6">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#222222] text-white rounded-full p-2 hover:bg-[#333333] transition"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto flex-nowrap snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar:none] px-14 gap-6"
        >
          <Cards Projects={projects} />
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#222222] text-white rounded-full p-2 hover:bg-[#333333] transition"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Projects;