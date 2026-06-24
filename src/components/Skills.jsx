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
    <div id='skills' className='flex flex-col justify-center items-center px-6 py-24 border border-b-white/20'>
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
          <div className="flex-1">
            <h2 className='text-xl text-[#818CF8] text-left'>Skills</h2>
            <h2 className='text-[#ebebed] text-3xl md:text-5xl font-bold'>Technical <br />Stack</h2>
          </div>

          <div className="flex-1 md:mt-8">
            <p className='text-md text-[#535969] md:text-right hover:text-[#818CF8] transition-all duration-300'>
              Tools and technologies I use to build <br /> full-stack web applications.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {
            skillGroups.map((group, index) => {
              return (
                <div key={index} className="flex flex-col sm:flex-row border border-b-white/20 pb-4 hover:border-b-[#818CF8] transition-all duration-300">
                  <div className="flex items-center sm:w-44 mb-2 sm:mb-0">
                    <h1 className="text-[#494e57] text-lg">{group.category}:</h1>
                  </div>

                  <div className="flex-1 flex flex-wrap gap-2">
                    {
                      group.skills.map((skill) =>
                        <div key={skill} className="inline border border-white/20 px-2 py-1 transition-all duration-300 hover:border-[#818CF8] hover:shadow-2xl active:animate-bounce">
                          <span className='text-[#ebebed] text-md'>{skill}</span>
                        </div>
                      )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Skills
