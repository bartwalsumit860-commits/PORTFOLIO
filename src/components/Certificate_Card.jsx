import { motion } from "framer-motion";

const Certificate_Card = ({ c }) => {
  const Icon = c.icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card border border-theme shadow-theme hover:shadow-theme-md rounded-xl p-6 transition-all duration-300 hover:border-accent cursor-default"
    >
      <div className="border border-theme w-fit py-2.5 px-3 rounded-full text-icon mb-3">
        <Icon size={26} />
      </div>
      <p className="text-muted text-sm font-semibold mb-2 tracking-wide">{c.issuer}</p>
      <h3 className="text-heading text-lg font-bold mb-3 leading-snug">{c.title}</h3>
      <p className="text-sm text-body leading-relaxed">{c.description}</p>
    </motion.div>
  );
};

export default Certificate_Card;
