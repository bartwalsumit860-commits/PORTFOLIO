import { FileText } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumit-bartwal-5962b1308/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/bartwalsumit860-commits",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/P8lOm5HcNf/",
  },
  {
    icon: SiGeeksforgeeks,
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/mru89eqz",
  },
];

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center px-6 border-b border-b-theme">
      <div className="w-full max-w-5xl mx-auto">
        <div className="py-16 md:py-32">
          <div className="inline-flex items-center gap-3 py-1.5 px-4 rounded-xl border border-theme bg-pill mb-10">
            <span className="bg-[var(--success)] rounded-full w-2 h-2 animate-pulse" />
            <span className="text-muted text-xs tracking-wide font-medium">
              Open for Opportunities
            </span>
          </div>

          <h1
            className="text-heading text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] font-black tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Sumit
            <br />
            <span className="bg-gradient-to-r from-[#818cf8] to-[#a78bfa] bg-clip-text text-transparent">
              Bartwal
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 mt-4 mb-8">
            <h2 className="text-body text-lg font-bold">Full Stack Developer</h2>
            <span className="text-muted hidden sm:inline">|</span>
            <p className="text-body tracking-wide">Dehradun, Uttarakhand</p>
          </div>

          <p className="text-body max-w-xl text-base md:text-xl leading-relaxed mb-12">
            Building end-to-end web applications with the MERN stack. From REST APIs
            and real-time systems to clean React UIs — I ship things that work.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#project" rel="noopener noreferrer">
              <button className="bg-[var(--accent)] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-theme-md">
                View Projects
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/11hsgY2a4R1FRvyCDEfG1wwis3J_4UojR/view?usp=drivesdk"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="border border-theme px-6 py-2.5 rounded-lg text-body font-medium hover:text-accent flex gap-2 items-center transition-all duration-300 bg-card">
                <FileText size={18} />
                Download Resume
              </button>
            </a>
          </div>

          <div className="flex items-center gap-7 mb-10">
            {Socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-icon hover:text-accent transition-colors duration-300 hover:scale-110 inline-block"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
