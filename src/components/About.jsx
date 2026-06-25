import { CiLocationOn } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { Star } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="flex flex-col px-6 py-24 border-b border-b-theme">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="flex-1">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-heading text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            A Developer Who <br />Actually Ships
          </h2>
          <p className="text-body text-base leading-relaxed mb-4">
            I'm Sumit, a BCA student at ICFAI University Dehradun with a perfect 10.0 CGPA. I build full-stack web applications using the MERN stack — real projects, real deployments, real users.
          </p>
          <p className="text-body text-base leading-relaxed mb-4">
            My work spans React frontends, Express/FastAPI backends, MongoDB databases, and real-time systems with Socket.IO. I'm equally comfortable reasoning through 300+ DSA problems on LeetCode as I am shipping production features.
          </p>
          <p className="text-body text-base leading-relaxed">
            I care about clean architecture, readable code, and systems that scale — not just demos that look good.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="border border-theme p-6 hover:border-accent transition-all duration-300 flex gap-4 rounded-lg">
            <div className="border border-theme w-fit h-fit p-2.5 rounded-lg">
              <FaUserGraduate size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-heading font-bold text-xl mb-1">
                Bachelor of Computer Applications
              </h3>
              <p className="text-sm md:text-base text-muted mb-1">
                Aug 2024 - May 2027
              </p>
              <div className="flex text-muted gap-2 mb-3">
                <CiLocationOn size={20} />
                <p>The ICFAI University, Dehradun</p>
              </div>
              <div className="p-2 flex gap-2 items-center bg-card border border-theme w-fit rounded-xl">
                <Star className="text-accent" size={18} />
                <span className="font-semibold text-heading text-sm">
                  CGPA: 10.00
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-theme p-4 hover:border-accent transition-all duration-300 rounded-lg">
              <p className="text-accent font-extrabold text-2xl md:text-3xl text-center mb-1">
                4+
              </p>
              <p className="text-xs md:text-sm text-muted text-center font-medium">
                Projects Deployed
              </p>
            </div>
            <div className="border border-theme p-4 hover:border-accent transition-all duration-300 rounded-lg">
              <p className="text-accent font-extrabold text-2xl md:text-3xl text-center mb-1">
                350+
              </p>
              <p className="text-xs md:text-sm text-muted text-center font-medium">
                DSA Problems Solved
              </p>
            </div>
            <div className="border border-theme p-4 hover:border-accent transition-all duration-300 rounded-lg">
              <p className="text-accent font-extrabold text-2xl md:text-3xl text-center mb-1">
                10.00
              </p>
              <p className="text-xs md:text-sm text-muted text-center font-medium">
                Current CGPA
              </p>
            </div>
          </div>

          <div className="border border-theme p-4 hover:border-accent transition-all duration-300 rounded-lg">
            <p className="text-muted text-sm font-semibold tracking-widest mb-3">
              CONTACT
            </p>
            <p className="text-body hover:text-accent transition-all duration-200 cursor-pointer mb-1">
              +917302590543
            </p>
            <p className="text-body hover:text-accent transition-all duration-200 cursor-pointer">
              bartwalsumit860@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
