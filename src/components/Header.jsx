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

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

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
      </div>
    </div>
  )
}

export default Header
