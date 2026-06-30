import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";
import { useState } from "react";
// Programming Languages
export const cppImg = "https://skillicons.dev/icons?i=cpp";
export const jsImg = "https://skillicons.dev/icons?i=javascript";
export const pythonImg = "https://skillicons.dev/icons?i=python";
export const sqlImg = "https://skillicons.dev/icons?i=mysql";

// Frontend
export const reactImg = "https://skillicons.dev/icons?i=react";
export const reduxImg = "https://skillicons.dev/icons?i=redux";
export const htmlImg = "https://skillicons.dev/icons?i=html";
export const cssImg = "https://skillicons.dev/icons?i=css";
export const tailwindImg = "https://skillicons.dev/icons?i=tailwind";

// Backend
export const nodeImg = "https://skillicons.dev/icons?i=nodejs";
export const expressImg = "https://skillicons.dev/icons?i=express";
export const fastapiImg = "https://skillicons.dev/icons?i=fastapi";

// APIs & Authentication
export const postmanImg = "https://skillicons.dev/icons?i=postman";
export const jwtImg = "https://api.iconify.design/logos/jwt-icon.svg";

// Databases
export const mongoImg = "https://skillicons.dev/icons?i=mongodb";
export const firebaseImg = "https://skillicons.dev/icons?i=firebase";

// Tools
export const gitImg = "https://skillicons.dev/icons?i=git";
export const githubImg = "https://skillicons.dev/icons?i=github";
export const renderImg = "https://skillicons.dev/icons?i=render";
export const vercelImg = "https://skillicons.dev/icons?i=vercel";
export const linuxImg = "https://skillicons.dev/icons?i=linux";

const skillGroups = [
  {
    category: "All",
    skills: [
      { text: "C/C++", image: cppImg },
      { text: "JavaScript (ES6+)", image: jsImg },
      { text: "Python", image: pythonImg },
      { text: "SQL", image: sqlImg },
      { text: "React.js", image: reactImg },
      { text: "Redux Toolkit", image: reduxImg },
      { text: "HTML5", image: htmlImg },
      { text: "CSS3", image: cssImg },
      { text: "Tailwind CSS", image: tailwindImg },
      { text: "Node.js", image: nodeImg },
      { text: "Express.js", image: expressImg },
      { text: "FastAPI", image: fastapiImg },
      { text: "REST APIs", image: postmanImg },
      { text: "JWT Auth", image: jwtImg },
      { text: "MongoDB", image: mongoImg },
      { text: "Firebase Firestore", image: firebaseImg },
      { text: "Git", image: gitImg },
      { text: "GitHub", image: githubImg },
      { text: "Postman", image: postmanImg },
      { text: "Render", image: renderImg },
      { text: "Vercel", image: vercelImg },
      { text: "Linux", image: linuxImg },
    ],
  },
  {
    category: "Languages",
    skills: [
      { text: "C/C++", image: cppImg },
      { text: "JavaScript (ES6+)", image: jsImg },
      { text: "Python", image: pythonImg },
      { text: "SQL", image: sqlImg },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { text: "React.js", image: reactImg },
      { text: "Redux Toolkit", image: reduxImg },
      { text: "HTML5", image: htmlImg },
      { text: "CSS3", image: cssImg },
      { text: "Tailwind CSS", image: tailwindImg },
    ],
  },
  {
    category: "Backend",
    skills: [
      { text: "Node.js", image: nodeImg },
      { text: "Express.js", image: expressImg },
      { text: "FastAPI", image: fastapiImg },
      { text: "REST APIs", image: postmanImg },
      { text: "JWT Auth", image: jwtImg },
    ],
  },
  {
    category: "Databases",
    skills: [
      { text: "MongoDB", image: mongoImg },
      { text: "Firebase Firestore", image: firebaseImg },
      { text: "SQL", image: sqlImg },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { text: "Git", image: gitImg },
      { text: "GitHub", image: githubImg },
      { text: "Postman", image: postmanImg },
      { text: "Render", image: renderImg },
      { text: "Vercel", image: vercelImg },
      { text: "Linux", image: linuxImg },
    ],
  },
];

const Skills = () => {
  const [select, setSelect] = useState(skillGroups[0].category);
  const activeGroup = skillGroups.find((group) => group.category === select) ?? skillGroups[0];

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between mb-14 gap-6"
        >
          <div className="flex-1">
            <span className="text-muted text-sm font-mono mb-2 block">02 / skills</span>
            <h2 className="text-heading text-3xl md:text-5xl font-extrabold">
              Technical <br />Stack
            </h2>
          </div>
          <div className="flex-1 md:mt-8">
            <p className="text-body text-base md:text-right">
              Tools and technologies I use to build <br /> full-stack web applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap gap-3"
        >
          {skillGroups.map((s) => (
            <button
              type="button"
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                select === s.category
                  ? "bg-[#7461F2] text-white"
                  : "bg-card"
              }`}
              key={s.category}
              onClick={() => setSelect(s.category)}
            >
              {s.category}
            </button>
          ))}
        </motion.div>

        <motion.div
         variants={staggerContainer}
     
        whileInView={"visible"}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {activeGroup.skills.map((skill, index) => (
            <motion.div
              key={`${skill.text}-${index}`}
              variants={staggerItem}
              className="flex items-center flex-col gap-3 rounded-2xl border border-white/10 bg-card px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] card-hover border-theme"
            >
              <img src={skill.image} alt={skill.text} className="h-10 w-10 object-contain" />
              <span className="text-md font-medium text-heading hover:shadow-2xl">{skill.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
