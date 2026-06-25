import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavLinks = [
  {
    text: "About",
    href: "#about"
  },
  {
    text: "Skills",
    href: "#skills"
  },
  {
    text: "Projects",
    href: "#project"
  },
  {
    text: "Certifications",
    href: "#certification"
  },
  {
    text: "Contact",
    href: "#contact"
  },

]
const Header = () => {
  const navRef = useRef(null);
  const [open, setopen] = useState(false);

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setopen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <div className="
          backdrop-blur-md
          bg-transparent
          border-b border-white/10 sticky top-0 w-full h-16">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4 ">
        <div className="text-[#818cf8] font-bold text-lg cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>SB</div>

        <ul className="hidden md:flex gap-8 list-none">
          {
            NavLinks.map((link, index) => {
              return (
                <button
                  key={index}
                  onClick={() => go(link.href)}
                  className="text-[#4e535d] text-sm hover:text-white font-semibold transition-all duration-300"
                >
                  {link.text}
                </button>
              )
            })
          }
        </ul>


        <div ref={navRef}>
          <div
            className="md:hidden text-[#ebebed] absolute top-5 right-5 cursor-pointer transition-transform duration-300"
            onClick={() => setopen(!open)}
          >
            {open ? <IoClose size={20} /> : <GiHamburgerMenu size={20} />}
          </div>
          <nav
            className={`md:hidden absolute bg-gray-900 p-4 gap-2 rounded-b-md top-10 right-4 flex flex-col
            transition-all duration-300 ease-out origin-top-right
            ${open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
              }`}
          >
            {NavLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  go(link.href);
                  setopen(false);
                }}
                className="text-[#4e535d] text-sm hover:text-white font-semibold transition-colors duration-300"
              >
                {link.text}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
