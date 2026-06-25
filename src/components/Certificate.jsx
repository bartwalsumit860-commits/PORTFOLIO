import { motion } from "framer-motion";
import Certificate_Card from "./Certificate_Card";
import { TbCloudComputing } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { TbCloudNetwork } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

const certs = [
  {
    icon: TbCloudComputing,
    title: "NPTEL Cloud Computing",
    issuer: "SWAYAM / IIT Kharagpur",
    year: "2025",
    description: "Completed the Cloud Computing course by IIT Kharagpur via SWAYAM NPTEL.",
  },
  {
    icon: FaReact,
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2025",
    description: "Completed the Web Development bootcamp on Udemy instructed by Dr. Angela Yu.",
  },
  {
    icon: IoStatsChart,
    title: "Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R",
    issuer: "Udemy",
    year: "2025",
    description: "Completed the Machine Learning A-Z hands-on practical course on Udemy.",
  },
  {
    icon: TbCloudNetwork,
    title: "IoT Workshop Certificate",
    issuer: "Workshop",
    year: "2026",
    description: "Hands-on hardware and sensor integration — programmed microcontrollers and IoT devices.",
  },
  {
    icon: SiLeetcode,
    title: "400+ DSA Problems Solved Across Platforms",
    issuer: "LeetCode & GeeksforGeeks",
    year: "Ongoing",
    description: "Consistently solving data structures and algorithms problems across platforms.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

const Certificate = () => {
  return (
    <div id="certification" className="flex justify-center px-6 py-24 border-b border-b-theme">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex mb-12">
          <div className="flex-1">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Recognition
            </p>
            <h2 className="text-heading text-3xl md:text-5xl font-extrabold">
              Certifications<br />& Achievements
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <Certificate_Card c={c} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
