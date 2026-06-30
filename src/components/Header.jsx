import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollShrink } from "../hooks/useScrollShrink";

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
  const progress = useScrollProgress();
  const activeSection = useActiveSection();
  const shrunk = useScrollShrink(60);

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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shrunk ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-4 md:mx-auto md:max-w-5xl backdrop-blur-xl bg-card rounded-2xl border border-theme shadow-theme-md">
        <div className="flex items-center justify-between px-5 py-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-accent font-extrabold text-xl tracking-tight hover:scale-105 transition-transform"
            aria-label="Scroll to top"
          >
            SB
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NavLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={`relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 link ${
                    isActive ? "text-accent" : "text-nav hover:text-accent"
                  }`}
                >
                  {link.text}
                </button>
              );
            })}
            <div className="w-px h-5 bg-border mx-2" />
            <button
              onClick={toggleTheme}
              className="text-nav hover:text-accent p-1.5 rounded-lg hover:bg-[var(--border)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          <div ref={navRef} className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-nav hover:text-accent p-1.5 rounded-lg hover:bg-[var(--border)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-icon p-1.5 rounded-lg hover:bg-[var(--border)] transition-all"
              aria-label="Toggle menu"
            >
              {open ? <IoClose size={18} /> : <GiHamburgerMenu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden md:hidden border-t border-theme"
            >
              <div className="px-5 py-3 flex flex-col gap-1">
                {NavLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      go(link.href);
                      setOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-accent bg-[var(--border)]"
                        : "text-nav hover:text-accent hover:bg-[var(--border)]"
                    }`}
                  >
                    {link.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--border)] rounded-full mx-4 md:mx-auto md:max-w-5xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] transition-all duration-150 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
