import React from 'react'

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
  return (
    <div className='px-15 py-4'>
        <div className="max-w-5xl mx-auto flex justify-between">
            <h1 className='text-xl text-[#818CF8] text-left font-semibold'>SUMIT BARTWAL</h1>
            <p className='text-sm text-center text-[#535969]'>&copy;2026 — Full Stack Developer, Dehradun</p>
            <ul className="flex gap-4 list-none">
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