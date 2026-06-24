import React from 'react'

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
    <div id='skills' className='flex flex-col justify-center items-center max-h-screen px-6 py-24 border border-b-white/20'>
      <div className="w-5xl">
        <div className="flex justify-between mb-10">
          <div className="flex-1">
            <h2 className='text-xl text-[#818CF8] text-left'>Skills</h2>
            <h2 className='text-[#ebebed] text-5xl font-bold'>Technical <br />Stack</h2>
          </div>

          <div className="flex-1 mt-8">
            <p className='text-md text-[#535969] text-right hover:text-[#818CF8] transition-all duration-300'>
              Tools and technologies I use to build <br /> full-stack web applications.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-5 grid-col-1 gap-4 space-y-px">
          {
            skillGroups.map((skill, index) => {
              const skills = skill.skills;

              return (
                <div className="flex  border  border-b-white/20 hover:border-b-[#818CF8] transition-all duration-300 ">
                  <div key={index} className="flex items-center gap-15 w-44">
                    <h1 className="text-[#494e57] text-lg mb-4">{skill.category}:</h1>
                  </div>

                  <div className="flex-1 flex gap-2">
                    {
                      skills.map((skill) =>
                        <div className="inline border border-white/20 px-2 py-1 mb-2  transition-all duration-300 hover:border-[#818CF8] hover:shadow-2xl active:animate-bounce">
                          <span key={skill} className='text-[#ebebed] text-md'>{skill}</span>
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