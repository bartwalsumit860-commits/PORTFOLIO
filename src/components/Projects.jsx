import React from 'react'
import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        number: "01",
        title: "Book Recommendation System",
        description:
            "Recommendation engine built on a dataset of 271K+ books, 1.1M+ ratings, and 278K+ users. Implements popularity-based filtering and collaborative filtering with cosine similarity. FastAPI backend serves Pickle-serialized models; React frontend delivers real-time results.",
        stack: ["React", "FastAPI", "Python", "Collaborative Filtering", "Pickle"],
        demo: "https://book-recommendation-system-3-engn.onrender.com/",
        repo: "https://github.com/bartwalsumit860-commits/Book_Recommendation_Systems",
        image: "src/assets/projects/book-recommendation-system-3-engn.onrender.com_ (1).png?w=800&h=450&fit=crop&auto=format",
    },
    {
        number: "02",
        title: "Job Khojo",
        description:
            "Dual-role job platform (recruiter + applicant) with end-to-end job posting, application, and status-tracking workflows. RESTful APIs and MongoDB schemas with JWT auth, cookie sessions, and Redux Toolkit across four slices. Deployed on Render.",
        stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
        demo: "https://job-khoj-3.onrender.com/",
        repo: "https://github.com/bartwalsumit860-commits/Job_Khoj",
        image: "src/assets/projects/Screenshot 2026-06-23 183544.png?w=800&h=450&fit=crop&auto=format",
    },
    {
        number: "03",
        title: "Chit Chat",
        description:
            "Real-time chat application built with the MERN stack and Socket.IO. JWT authentication, user management, message persistence, online user tracking via WebSocket, and a modular backend architecture with clean REST API design.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
        demo: "https://chit-chat-1-fhvv.onrender.com/",
        repo: "https://github.com/bartwalsumit860-commits/Chit_Chat",
        image: "src/assets/projects/chit-chat-1-fhvv.onrender.com_.png?w=800&h=450&fit=crop&auto=format",
    },
];

const Projects = () => {
    return (
        <div id='project' className='px-6 py-20 flex flex-col justify-center items-center border border-b-white/20'>
            <div className="w-5xl mx-auto">
                <div className="flex justify-between mb-15">
                    <div className="flex-1">
                        <h2 className='text-xl text-[#818CF8] text-left'>Projects</h2>
                        <h2 className='text-[#ebebed] text-5xl font-bold'>Selected<br />Work</h2>
                    </div>

                    <div className="flex-1 mt-8">
                        <p className='text-md text-[#535969] text-right hover:text-[#818CF8] transition-all duration-300'>
                            Three full-stack and ML projects — all deployed,<br /> all with real data and working features enabled.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-4 w-full">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="group border border-white/20 overflow-hidden hover:shadow-gray-800 hover:shadow-md">
                                    <div className="overflow-hidden aspect[16/7] mb-7">
                                        <img src={project.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-80 hover:scale-[1.02] transition-all duration-400" />
                                    </div>

                                    <div className="flex justify-between px-6 py-7">
                                        <div className="flex-1 flex flex-col gap-2">
                                            <p className='text-[#818CF8] text-md font-semibold'>{project.number}</p>
                                            <h1 className="text-[#ebebed] text-2xl font-bold">{project.title}</h1>
                                            <p className='text-sm text-[#535969] w-[60%] mb-4'>{project.description}</p>
                                            <div className="flex-1 flex gap-3">
                                                {
                                                    project.stack.map((skill) => (
                                                        <div key={skill} className="inline border border-white/20 px-2 py-1 mb-2  transition-all duration-300 hover:border-[#818CF8] hover:shadow-2xl active:animate-bounce">
                                                            <span className='text-[#ebebed] text-md'>{skill}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <a href={project.demo} className=""
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <button className='bg-[#818cf8] px-2 py-2 hover:bg-[#817cf8] text-sm flex gap-1 items-center'>
                                                    <IoMdLink />
                                                    Live Demo</button>
                                            </a>

                                            <a href={project.repo} className=""
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <button className='border border-gray-700 px-2 py-2 text-sm text-gray-100 hover:text-gray-300 hover:text-shadow-amber-100 flex gap-1 items-center w-full'>
                                                    <FaGithub/>
                                                    Source
                                                </button>
                                            </a>

                                        </div>
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

export default Projects