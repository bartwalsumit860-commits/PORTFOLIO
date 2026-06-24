import React from 'react'
import { FileText } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";



const Socials = [
    {
        icon: FaLinkedin,
        label: "Linkedin",
        href: "https://www.linkedin.com/in/sumit-bartwal-5962b1308/"
    },
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/bartwalsumit860-commits"
    },
    {
        icon: SiLeetcode,
        label: "Leetcode",
        href: "https://leetcode.com/u/P8lOm5HcNf/",
    },
    {
        icon: SiGeeksforgeeks,
        label: "Geeksforgeeks",
        href: "https://www.geeksforgeeks.org/profile/mru89eqz",
    }
]

const Hero = () => {
    return (
        <div id='hero' className='min-h-screen flex flex-col justify-center px-6 border border-b-white/20'>
            <div className="w-full max-w-5xl mx-auto">
                <div className="py-24 md:py-32">
                    {/* status pill */}
                    <div className="inline-flex items-center gap-3 py-1.5 px-4 rounded-xl border border-gray-800 mb-10">
                        <span className="bg-emerald-400 rounded-full w-2 h-2 animate-pulse" />
                        <span className="text-[#4e5558] text-xs tracking-wide">Open for Opportunities</span>
                    </div>


                    {/* Name */}

                    <h1 className='text-[#ebebed] text-[clamp(3rem,10vw,7rem)] leading-[0.9] animate-pulse'
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                        Sumit
                        <br />
                        <span className='text-[#818cf8]'>
                            Bartwal
                        </span>
                    </h1>


                    {/* role and address */}
                    <div className="display flex flex-wrap items-center gap-2 mt-4 mb-8">
                        <h2 className='text-[#565d6f] text-lg font-semibold'>Full Stack Developer</h2>
                        <span className='text-[#565d6f]'>|</span>
                        <p className='text-[#565d6f] tracking-wide' >Dehradun, Uttrakhand</p>
                    </div>


                    {/* description */}
                    <p className='text-[#565d6f] max-w-xl text-xl leading-relaxed mb-12'>
                        Building end-to-end web applications with the MERN stack. From REST APIs
                        and real-time systems to clean React UIs — I ship things that work.
                    </p>

                    {/* Buttons */}

                    <div className="flex gap-3 mb-8">
                        <button className='bg-[#818cf8] px-4 py-2 hover:bg-[#817cf8]'>View Projects</button>

                        <a href='https://drive.google.com/file/d/11hsgY2a4R1FRvyCDEfG1wwis3J_4UojR/view?usp=drivesdk'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <button className='border border-gray-700 px-4 py-2 text-gray-100 hover:text-gray-300 hover:text-shadow-amber-100 flex gap-1'>
                                <FileText />
                                Download Resume
                            </button>
                        </a>

                    </div>

                    {/* Social links */}
                    

                    <div className="flex items-center gap-7 mb-10">
                        {
                            Socials.map((social) => {
                                const href = social.href;
                                const label = social.label;
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel='noopener noreferrer'
                                        className="text-white  hover:text-[#818cf8] ">
                                            <Icon size={30}/>
                                        </a>
                                )
                            })
                        }
                    </div>

                  


                </div>
            </div>

        </div>
    )
}

export default Hero