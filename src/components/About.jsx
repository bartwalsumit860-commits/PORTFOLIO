import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { Star } from "lucide-react";
import { fadeLeft, fadeRight } from "../utils/animations";

const About = () => {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex-1"
        >
          <span className="text-muted text-sm font-mono mb-2 block">01 / about</span>
          <h2 className="text-heading text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            A Developer Who <br />Actually Ships
          </h2>
          <div className="space-y-4 text-body text-base leading-relaxed">
            <p>
              I'm Sumit, a BCA student at ICFAI University Dehradun with a perfect 10.0 CGPA. I build full-stack web applications using the MERN stack — real projects, real deployments, real users.
            </p>
            <p>
              My work spans React frontends, Express/FastAPI backends, MongoDB databases, and real-time systems with Socket.IO. I'm equally comfortable reasoning through 300+ DSA problems on LeetCode as I am shipping production features.
            </p>
            <p>
              I care about clean architecture, readable code, and systems that scale — not just demos that look good.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="bg-card border border-theme p-6 rounded-2xl flex gap-4 card-hover">
            <div className="border border-theme w-fit h-fit p-3 rounded-xl shrink-0">
              <FaUserGraduate size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-heading font-bold text-lg mb-1">
                Bachelor of Computer Applications
              </h3>
              <p className="text-sm text-muted mb-1">Aug 2024 - May 2027</p>
              <div className="flex text-muted gap-2 mb-3">
                <CiLocationOn size={18} />
                <span>The ICFAI University, Dehradun</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--pill-bg)] border border-theme rounded-xl">
                <Star size={16} className="text-accent" />
                <span className="font-semibold text-heading text-sm">CGPA: 10.00</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "4+", label: "Projects Deployed" },
              { value: "350+", label: "DSA Problems Solved" },
              { value: "10.00", label: "Current CGPA" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-theme p-4 rounded-2xl text-center card-hover"
              >
                <p className="text-accent font-extrabold text-2xl md:text-3xl mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card border border-theme p-5 rounded-2xl card-hover">
            <p className="text-muted text-xs font-bold tracking-widest mb-3">CONTACT</p>
            <p className="text-body hover:text-accent transition-colors cursor-pointer mb-1">
              +917302590543
            </p>
            <p className="text-body hover:text-accent transition-colors cursor-pointer">
              bartwalsumit860@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
