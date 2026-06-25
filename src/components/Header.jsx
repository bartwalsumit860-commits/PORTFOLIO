import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/useTheme";

const NavLinks = [
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#project" },
  { text: "Certifications", href: "#certification" },
  { text: "Contact", href: "#contact" },
];

const Header = () => {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="backdrop-blur-md bg-transparent border-b border-theme sticky top-0 w-full h-16 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div
          className="text-accent font-extrabold text-xl cursor-pointer tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SB
        </div>

        <ul className="hidden md:flex gap-8 list-none items-center">
          {NavLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => go(link.href)}
              className="text-nav text-sm hover:text-accent font-semibold transition-all duration-300"
            >
              {link.text}
            </button>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="text-nav hover:text-accent transition-colors duration-300 p-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        <div ref={navRef} className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-nav hover:text-accent transition-colors duration-300 p-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div
            className="text-icon cursor-pointer transition-transform duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose size={20} /> : <GiHamburgerMenu size={20} />}
          </div>
          <nav
            className={`md:hidden absolute bg-card p-5 gap-3 rounded-b-md top-15 right-0 flex flex-col
              transition-all duration-300 ease-out origin-top-right w-full border border-theme
              ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            {NavLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  go(link.href);
                  setOpen(false);
                }}
                className="text-nav text-left text-md hover:text-accent font-semibold transition-colors duration-300"
              >
                {link.text}
                <hr className="border-theme mt-2" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
