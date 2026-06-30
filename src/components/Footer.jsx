import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handle = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative px-6 py-8 border-t border-theme"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="gradient-text text-lg font-extrabold tracking-tight">
          SUMIT BARTWAL
        </p>
        <p className="text-sm text-center text-muted">
          &copy; {new Date().getFullYear()} — Full Stack Developer, Dehradun
        </p>
        <p className="text-xs text-muted">
          Built with React & Tailwind CSS
        </p>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-2xl bg-card border border-theme text-accent shadow-theme-md hover:border-accent transition-all z-40"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
};

export default Footer;
