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
    text: "Project",
    href: "#project"
  },
  {
    text: "Certification",
    href: "#certification"
  },
  {
    text: "Contact",
    href: "#contact"
  },
];

const Footer = () => {

  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='px-6 py-4'>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className='text-xl text-[#818CF8] font-semibold'>SUMIT BARTWAL</h1>
            <p className='text-sm text-center text-[#535969]'>&copy;2026 — Full Stack Developer, Dehradun</p>
            <ul className="hidden md:flex gap-4 list-none">
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

export default Footer
