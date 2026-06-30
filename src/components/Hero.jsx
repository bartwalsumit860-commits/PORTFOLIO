import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { staggerContainer, staggerItem } from "../utils/animations";

const Socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sumit-bartwal-5962b1308/" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/bartwalsumit860-commits" },
  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/P8lOm5HcNf/" },
  { icon: SiGeeksforgeeks, label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/mru89eqz" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="py-8 md:py-24"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full border border-theme bg-card mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
            <span className="text-muted text-xs tracking-wide font-semibold">
              Open for Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-heading text-[clamp(2.8rem,12vw,7.5rem)] leading-[0.88] font-black tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Sumit
            <br />
            <span className="gradient-text">Bartwal</span>
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3 mt-6 mb-8"
          >
            <span className="text-body text-lg md:text-xl font-bold">Full Stack Developer</span>
            <span className="text-muted hidden sm:inline text-lg">/</span>
            <span className="text-body tracking-wide">Dehradun, Uttarakhand</span>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-body max-w-xl text-base md:text-xl leading-relaxed mb-12"
          >
            Building end-to-end web applications with the MERN stack. From REST APIs
            and real-time systems to clean React UIs — I ship things that work.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#project">
              <button className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2">
                View Projects
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/11hsgY2a4R1FRvyCDEfG1wwis3J_4UojR/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-card border border-theme px-6 py-3 rounded-xl text-body font-medium hover:text-accent flex items-center gap-2 transition-all duration-300">
                <FileText size={18} />
                Download Resume
              </button>
            </a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex items-center gap-6"
          >
            {Socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="text-icon hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon size={26} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
