import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full bg-[#222222] px-4">
      <div className="h-14 flex items-center justify-between">
        <div className="font-bold text-white text-lg ">Pardeep Singh</div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center justify-evenly w-[50%]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-white mx-2 font-bold group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white relative w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu
            size={24}
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={24}
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col pb-4">
          {links.map((link) => (
          <a  
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white py-2 font-bold transition-colors duration-200 hover:text-gray-300 hover:pl-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;