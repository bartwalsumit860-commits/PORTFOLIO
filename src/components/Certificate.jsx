import React from 'react'
import Certificate_Card from './Certificate_Card';
import { TbCloudComputing } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { TbCloudNetwork } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

const certs = [
  {
    icon:  TbCloudComputing,
    title: "NPTEL Cloud Computing",
    issuer: "SWAYAM / IIT Kharagpur",
    year: "2025",
    description: "Completed the Cloud Computing course by IIT Kharagpur via SWAYAM NPTEL.",
    link: ""
  },
  {
    icon: FaReact,
    title: "The Complete Full-Stack Web Developement Bootcamp",
    issuer: "Udemy",
    year: "2025",
    description: "Completed the Web Development bootcamp in Udemy instructed by Dr Angela Yu",
    link: ""
  },
  {
    icon: IoStatsChart,
    title: "Machine Learning A-Z[2026]: ML,DL,AI with AWS , python & R",
    issuer: "Udemy",
    year: "2025",
    description: "Completed the Machine Learning A-Z  hands on practical course on udemy",
    link: ""
  },
  {
    icon: TbCloudNetwork,
    title: "IoT Workshop Certificate",
    issuer: "Workshop",
    year: "2026",
    description: "Hands-on hardware and sensor integration — programmed microcontrollers and IoT devices.",
    link: ""
  },
  {
    icon: SiLeetcode,
    title: "400+ DSA Problems Solved across platform",
    issuer: "LeetCode & GeeksForGeeks",
    year: "Ongoing",
    description: "Consistently solving data structures and algorithms problems across platforms.",
    link: ""
  },
];

const Certificate = () => {
  return (
    <div id="certification" className='flex justify-center px-6 py-24 border border-b-white/20'>
      <div className="w-5xl mx-auto">
        <div className="flex justify-between mb-15">
          <div className="flex-1">
            <h2 className='text-xl text-[#818CF8] text-left'>Recognition</h2>
            <h2 className='text-[#ebebed] text-5xl font-bold'>Certifications
              <br />& Achievements</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {
            certs.map((c,index)=>{
              return(
                <Certificate_Card key={index} c={c}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Certificate