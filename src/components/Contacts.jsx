import React from 'react'
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";


const contacts = [
    {
        icon: IoMdMail,
        text: "bartwalsumit860@gmail.com"
    },
    {
        icon: MdAddCall,
        text: "+91 7302590543"
    },
    {
        icon: IoMdHome,
        text: "Dehradun,Uttrakhand"
    }
]

const Contacts = () => {
    return (
        <div id="contact" className='flex justify-center px-6 py-24 border border-b-white/20 flex-col items-center'>
            <div className="max-w-5xl mx-auto grid grid-cols-2  gap-8 md:w-full">
                <div className="flex-1">
                    <h1 className='text-xl text-[#818CF8] text-left mb-4'>Contacts</h1>
                    <h1 className='text-[#ebebed] text-5xl font-bold mb-8 leading-[1.4]'>Lets  <br /> Talk</h1>

                    <p className='text-md text-[#535969] w-[80%] mb-10'>
                        Open to full-time roles, internships, and freelance projects. If you have something interesting in mind, reach out.
                    </p>

                    <div className="flex flex-col gap-4 justify-center mb-4">
                        {
                            contacts.map((contact, index) => {
                                const Icon = contact.icon;
                                return (
                                    <div className="flex gap-3 items-center">
                                        <div className="text-white">
                                            <Icon size={20} />
                                        </div>
                                        <p className='text-md text-[#535969] hover:text-[#818CF8] transition-all duration-200'>{contact.text}</p>
                                    </div>
                                )
                            })
                        }

                        <div className="flex gap-4 items-center">
                            <a href='https://www.linkedin.com/in/sumit-bartwal-5962b1308/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="text-white border border-white/20 py-2 px-2 w-fit rounded-md hover:text-[#818CF8] hover:border-[#818CF8] transition-all duration-200">
                                <FaLinkedin size={25} />
                            </a>

                            <a href='https://github.com/bartwalsumit860-commits'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="text-white border border-white/20 py-2 px-2 w-fit rounded-md hover:text-[#818CF8] hover:border-[#818CF8] transition-all duration-200">
                                <FaGithub size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-2 gap-3 auto-rows-min">
                    <div className="">
                        <label className="text-[#494e57] text-md mb-2 block" htmlFor="name">NAME</label>
                        <input id="name"
                            name="name"
                            placeholder='Name..'
                            type="text" className='
                                    bg-white/10 text-gray-500
                                    py-2 px-4 rounded-lg
                                    border border-white/20
                                    outline-none
                                    focus:border-[#818CF8]
                                    focus:ring-2 focus:ring-[#818CF8]/50
                                    block w-full focus:text-white'
                                 />
                    </div>
                    <div className="mb-2">
                        <div className="w-full">
                            <label className="text-[#494e57] text-md mb-2 block" htmlFor="email">EMAIL</label>
                            <input id="email"
                                name="email"
                                placeholder='yourname@gmail.com'
                                type="text" className='
                                    bg-white/10 text-gray-500
                                    py-2 px-4 rounded-lg
                                    border border-white/20
                                    outline-none
                                    focus:border-[#818CF8]
                                    focus:ring-2 focus:ring-[#818CF8]/50
                                    block w-full focus:text-white'/>
                        </div>
                    </div>


                    <div className="col-span-2 mb-5">
                        <label className="text-[#494e57] text-md mb-2 block" htmlFor="message">MESSAGE</label>
                        <textarea name="message" id="message" className=' bg-white/10 text-gray-500
                                    py-2 px-4 rounded-lg
                                    border border-white/20
                                    outline-none
                                    focus:border-[#818CF8]
                                    focus:ring-2 focus:ring-[#818CF8]/50
                                    block w-full min-h-50 focus:text-white'></textarea>
                     </div>

                     <div className="col-span-2">
                        <button className='w-full py-2 bg-[#818CF8] flex justify-center items-center gap-2 rounded-md hover:bg-[#817cf8]'>
                            <IoMdSend size={20}/>
                            Send
                            </button>
                     </div>


                </div>
            </div>
        </div>
    )
}

export default Contacts