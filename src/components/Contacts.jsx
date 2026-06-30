import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { fadeLeft, fadeRight } from "../utils/animations";

const contacts = [
  { icon: IoMdMail, text: "bartwalsumit860@gmail.com" },
  { icon: MdAddCall, text: "+91 7302590543" },
  { icon: IoMdHome, text: "Dehradun, Uttarakhand" },
];

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex-1"
        >
          <span className="text-muted text-sm font-mono mb-2 block">05 / contact</span>
          <h2 className="text-heading text-3xl md:text-5xl font-extrabold mb-8 leading-[1.2]">
            Let's <br /> Talk
          </h2>
          <p className="text-body text-base w-full md:w-[85%] mb-10 leading-relaxed">
            Open to full-time roles, internships, and freelance projects. If you have something interesting in mind, reach out.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="flex gap-3 items-center">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-theme text-icon">
                    <Icon size={16} />
                  </div>
                  <span className="text-body text-sm hover:text-accent transition-colors">
                    {contact.text}
                  </span>
                </div>
              );
            })}
            <div className="flex gap-3 mt-2">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sumit-bartwal-5962b1308/" },
                { icon: FaGithub, href: "https://github.com/bartwalsumit860-commits" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-theme text-icon hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label="Social link"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="bg-card border border-theme rounded-2xl p-7"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <label
                  htmlFor={field}
                  className={`absolute left-4 transition-all duration-300 pointer-events-none text-xs font-bold tracking-widest ${
                    focused === field || form[field]
                      ? "-top-2.5 text-accent bg-card px-1"
                      : "top-3 text-muted"
                  }`}
                >
                  {field.toUpperCase()}
                </label>
                <input
                  id={field}
                  name={field}
                  type="text"
                  value={form[field]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-input text-body pt-5 pb-2.5 px-4 rounded-xl border border-theme outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
            ))}
            <div className="col-span-1 sm:col-span-2 relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-300 pointer-events-none text-xs font-bold tracking-widest z-10 ${
                  focused === "message" || form.message
                    ? "-top-2.5 text-accent bg-card px-1"
                    : "top-3 text-muted"
                }`}
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full bg-input text-body pt-5 pb-2.5 px-4 rounded-xl border border-theme outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all min-h-28 resize-none"
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <button className="btn-primary w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm">
                <IoMdSend size={16} />
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
