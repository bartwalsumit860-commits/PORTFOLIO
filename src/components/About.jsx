import { CiLocationOn } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { Star } from "lucide-react";

const About = () => {
    return (
        <div id="about" className='flex flex-col px-6 py-24 border border-b-white/20'>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="flex-1">
                    <h1 className='text-xl text-[#818CF8] text-left mb-4'>About</h1>
                    <h1 className='text-[#ebebed] text-3xl md:text-5xl font-bold mb-8'>A Developer Who <br />Actually Ships</h1>
                    <p className='text-md text-[#535969]'>
                        I'm Sumit, a BCA student at ICFAI University Dehradun with a perfect 10.0 CGPA. I build full-stack web applications using the MERN stack — real projects, real deployments, real users.
                    </p>
                    <br />
                    <p className='text-md text-[#535969]'>
                        My work spans React frontends, Express/FastAPI backends, MongoDB databases, and real-time systems with Socket.IO. I'm equally comfortable reasoning through 300+ DSA problems on LeetCode as I am shipping production features.
                    </p>
                    <br />

                    <p className='text-md text-[#535969]'>
                        I care about clean architecture, readable code, and systems that scale — not just demos that look good.
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-8">
                    <div className="border border-white/20 p-6 hover:border-[#818CF8] transition-all duration-300 flex gap-4">
                        <div className='border border-white/20 w-fit h-fit p-2 rounded-md'>
                            <FaUserGraduate size={20} className='text-[#818cf8] bg-black' />
                        </div>

                        <div className=''>
                            <h3 className='text-[#ebebed] font-semibold text-xl mb-1'>Bachelor of Computer Applications</h3>
                            <p className='text-sm md:text-base text-[#494e57] mb-1'>Aug 2024-May 2027</p>
                            <div className="flex text-[#494e57] gap-2 mb-2">
                                <CiLocationOn size={20} />
                                <p>The ICFAI University, Dehradun</p>
                            </div>

                        <div className="p-2 flex gap-2 items-center bg-gray-900 w-fit rounded-xl">
                            <Star className="text-[#818cf8]" size={20}/>
                            <h2 className="font-semibold text-[#ebebed]">CGPA: 10.00</h2>
                        </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                            <div className="border border-white/20 p-4 hover:border-[#818CF8] transition-all duration-300">
                                <h1 className="text-[#818cf8] font-extrabold text-2xl md:text-3xl text-center mb-2">4+</h1>
                                <p className="text-xs md:text-base text-[#494e57] text-center">Projects Deployed</p>
                            </div>

                            <div className=" border border-white/20 p-4 hover:border-[#818CF8] transition-all duration-300">
                                <h1 className="text-[#818cf8] font-extrabold text-2xl md:text-3xl text-center mb-2">350+</h1>
                                <p className="text-xs md:text-base text-[#494e57] text-center">DSA Problems Solved</p>
                            </div>

                            <div className="border border-white/20 p-4 hover:border-[#818CF8] transition-all duration-300">
                                <h1 className="text-[#818cf8] font-extrabold text-2xl md:text-3xl text-center mb-2">10.00</h1>
                                <p className="text-xs md:text-base text-[#494e57] text-center">Current CGPA</p>
                            </div>
                    </div>

                    <div className="border border-white/20 p-4 hover:border-[#818CF8] transition-all duration-300">
                        <h1 className="text-[#494e57] text-lg mb-4">CONTACT:</h1>
                        <p className="text-[#494e57] hover:text-[#818CF8] transition-all duration-200 cursor-pointer">
                            +917302590543
                        </p>

                        <p className="text-[#494e57] hover:text-[#818CF8] transition-all duration-200 cursor-pointer">
                            bartwalsumit860@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
