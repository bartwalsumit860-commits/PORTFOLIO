const skillGroups = [
  {
    category: "Languages",
    skills: ["C/C++", "JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Firebase Firestore", "SQL"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Postman", "Render", "Vercel", "Linux"],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center px-6 py-24 border-b border-b-theme">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <div className="flex-1">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Skills
            </p>
            <h2 className="text-heading text-3xl md:text-5xl font-extrabold">
              Technical <br />Stack
            </h2>
          </div>
          <div className="flex-1 md:mt-8">
            <p className="text-body text-base md:text-right hover:text-accent transition-all duration-300">
              Tools and technologies I use to build <br /> full-stack web applications.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row border-b border-b-theme pb-4 hover:border-b-accent transition-all duration-300"
            >
              <div className="flex items-center sm:w-44 mb-2 sm:mb-0">
                <p className="text-muted text-base font-bold">{group.category}</p>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline border border-theme px-3 py-1.5 rounded-lg transition-all duration-300 hover:border-accent hover:shadow-theme-md bg-card"
                  >
                    <span className="text-body text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
