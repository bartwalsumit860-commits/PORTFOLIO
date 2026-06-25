import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const contacts = [
  { icon: IoMdMail, text: "bartwalsumit860@gmail.com" },
  { icon: MdAddCall, text: "+91 7302590543" },
  { icon: IoMdHome, text: "Dehradun, Uttarakhand" },
];

const Contacts = () => {
  return (
    <div
      id="contact"
      className="flex justify-center px-6 py-24 border-b border-b-theme flex-col items-center"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="flex-1">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Contacts
          </p>
          <h2 className="text-heading text-3xl md:text-5xl font-extrabold mb-8 leading-[1.3]">
            Let's <br /> Talk
          </h2>
          <p className="text-body text-base w-full md:w-[85%] mb-10 leading-relaxed">
            Open to full-time roles, internships, and freelance projects. If you have something interesting in mind, reach out.
          </p>
          <div className="flex flex-col gap-4 justify-center mb-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="flex gap-3 items-center">
                  <div className="text-icon">
                    <Icon size={20} />
                  </div>
                  <p className="text-body hover:text-accent transition-all duration-200">
                    {contact.text}
                  </p>
                </div>
              );
            })}
            <div className="flex gap-3 items-center mt-2">
              <a
                href="https://www.linkedin.com/in/sumit-bartwal-5962b1308/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-icon border border-theme p-2.5 rounded-lg hover:text-accent hover:border-accent transition-all duration-200"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/bartwalsumit860-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-icon border border-theme p-2.5 rounded-lg hover:text-accent hover:border-accent transition-all duration-200"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-min">
          <div>
            <label className="text-muted text-xs font-bold tracking-widest mb-2 block" htmlFor="name">
              NAME
            </label>
            <input
              id="name"
              name="name"
              placeholder="Name.."
              type="text"
              className="bg-input text-body placeholder:text-muted py-2.5 px-4 rounded-lg border border-theme outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 block w-full"
            />
          </div>
          <div>
            <label className="text-muted text-xs font-bold tracking-widest mb-2 block" htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              placeholder="yourname@gmail.com"
              type="text"
              className="bg-input text-body placeholder:text-muted py-2.5 px-4 rounded-lg border border-theme outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 block w-full"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="text-muted text-xs font-bold tracking-widest mb-2 block" htmlFor="message">
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-input text-body placeholder:text-muted py-2.5 px-4 rounded-lg border border-theme outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 block w-full min-h-32"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <button className="w-full py-3 bg-[var(--accent)] text-white font-semibold flex justify-center items-center gap-2 rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-300">
              <IoMdSend size={18} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
