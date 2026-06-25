const NavLinks = [
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Project", href: "#project" },
  { text: "Certification", href: "#certification" },
  { text: "Contact", href: "#contact" },
];

const Footer = () => {
  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-6 py-6 border-t border-theme">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-accent text-lg font-extrabold tracking-tight">SUMIT BARTWAL</p>
        <p className="text-sm text-center text-muted">
          &copy;{new Date().getFullYear()} — Full Stack Developer, Dehradun
        </p>
        <ul className="hidden md:flex gap-4 list-none">
          {NavLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => go(link.href)}
              className="text-nav text-sm hover:text-accent font-semibold transition-all duration-300"
            >
              {link.text}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
