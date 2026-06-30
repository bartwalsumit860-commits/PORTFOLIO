import { motion } from "framer-motion";
import Certificate_Card from "./Certificate_Card";
import { staggerContainer, staggerItem } from "../utils/animations";
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
    description: "Completed the Cloud Computing course by IIT Kharagpur via SWAYAM NPTEL.",
  },
  {
    icon: FaReact,
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    description: "Completed the Web Development bootcamp on Udemy instructed by Dr. Angela Yu.",
  },
  {
    icon: IoStatsChart,
    title: "Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R",
    issuer: "Udemy",
    description: "Completed the Machine Learning A-Z hands-on practical course on Udemy.",
  },
  {
    icon: TbCloudNetwork,
    title: "IoT Workshop Certificate",
    issuer: "Workshop",
    description: "Hands-on hardware and sensor integration — programmed microcontrollers and IoT devices.",
  },
  {
    icon: SiLeetcode,
    title: "400+ DSA Problems Solved Across Platforms",
    issuer: "LeetCode & GeeksforGeeks",
    description: "Consistently solving data structures and algorithms problems across platforms.",
  },
];

const Certificate = () => {
  return (
    <section id="certification" className="relative px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-muted text-sm font-mono mb-2 block">04 / recognition</span>
          <h2 className="text-heading text-3xl md:text-5xl font-extrabold">
            Certifications<br />& Achievements
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certs.map((c, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Certificate_Card c={c} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
