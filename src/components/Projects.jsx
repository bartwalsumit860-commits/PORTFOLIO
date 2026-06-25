import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import bookImg from "../assets/projects/book-recommendation-system-3-engn.onrender.com_ (1).png";
import jobImg from "../assets/projects/Screenshot 2026-06-23 183544.png";
import chatImg from "../assets/projects/chit-chat-1-fhvv.onrender.com_.png";

const projects = [
  {
    number: "01",
    title: "Book Recommendation System",
    description:
      "Recommendation engine built on a dataset of 271K+ books, 1.1M+ ratings, and 278K+ users. Implements popularity-based filtering and collaborative filtering with cosine similarity. FastAPI backend serves Pickle-serialized models; React frontend delivers real-time results.",
    stack: ["React", "FastAPI", "Python", "Collaborative Filtering", "Pickle"],
    demo: "https://book-recommendation-system-3-engn.onrender.com/",
    repo: "https://github.com/bartwalsumit860-commits/Book_Recommendation_Systems",
    image: bookImg,
  },
  {
    number: "02",
    title: "Job Khojo",
    description:
      "Dual-role job platform (recruiter + applicant) with end-to-end job posting, application, and status-tracking workflows. RESTful APIs and MongoDB schemas with JWT auth, cookie sessions, and Redux Toolkit across four slices. Deployed on Render.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "https://job-khoj-3.onrender.com/",
    repo: "https://github.com/bartwalsumit860-commits/Job_Khoj",
    image: jobImg,
  },
  {
    number: "03",
    title: "Chit Chat",
    description:
      "Real-time chat application built with the MERN stack and Socket.IO. JWT authentication, user management, message persistence, online user tracking via WebSocket, and a modular backend architecture with clean REST API design.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    demo: "https://chit-chat-1-fhvv.onrender.com/",
    repo: "https://github.com/bartwalsumit860-commits/Chit_Chat",
    image: chatImg,
  },
];

const Projects = () => {
  return (
    <div id="project" className="px-6 py-20 flex flex-col justify-center items-center border-b border-b-theme">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
          <div className="flex-1">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Projects
            </p>
            <h2 className="text-heading text-3xl md:text-5xl font-extrabold">
              Selected<br />Work
            </h2>
          </div>
          <div className="flex-1 md:mt-8">
            <p className="text-body text-base md:text-right hover:text-accent transition-all duration-300">
              Three full-stack and ML projects — all deployed,<br /> all with real data and working features enabled.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="group border border-theme overflow-hidden hover:shadow-theme-md rounded-xl bg-card"
            >
              <div className="overflow-hidden aspect-16/7">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-between px-6 py-7 gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <p className="text-accent text-sm font-bold tracking-wide">{project.number}</p>
                  <h3 className="text-heading text-2xl font-extrabold">{project.title}</h3>
                  <p className="text-sm text-body w-full lg:w-[60%] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((skill) => (
                      <div
                        key={skill}
                        className="inline border border-theme px-3 py-1 rounded-lg text-sm font-medium text-body bg-card transition-all duration-300 hover:border-accent"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className="bg-[var(--accent)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex gap-1.5 items-center hover:bg-[var(--accent-hover)] transition-all duration-300">
                      <IoMdLink />
                      Live Demo
                    </button>
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <button className="border border-theme px-5 py-2.5 rounded-lg text-sm font-medium text-body hover:text-accent flex gap-1.5 items-center transition-all duration-300 bg-card">
                      <FaGithub />
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
