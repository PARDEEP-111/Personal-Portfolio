import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TechStack = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "Git", "GitHub", "Tailwind CSS", "Vite", "c/c++", "Npm", "Figma"
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  return (
    <div id="techstack" className="w-full scroll-mt-50 flex flex-col items-center bg-[#161513] ">
      
        <h1 className="text-3xl font-bold  mb-6 text-[rgb(132,145,160)]">Tech Stack</h1>
        <div className=" relative w-full  items-center bg-[#161513] py-6">

            <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#181717] text-white rounded-full p-2 hover:bg-[#333333] transition"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto flex-nowrap items-center justify-start snap-x snap-mandatory text-white scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar:none] px-12"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mx-2 h-10 w-32.5 shrink-0 rounded-2xl flex items-center justify-center cursor-default bg-[#222222] snap-center"
          >
            {skill}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#181717] text-white rounded-full p-2 hover:bg-[#333333] transition"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
        </div>
      
    </div>
  );
};

export default TechStack;