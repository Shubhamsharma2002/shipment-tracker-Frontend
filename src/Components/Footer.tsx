import { BsBrowserChrome } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white flex flex-col justify-center items-center text-center font-bold px-4 py-8 mt-5 space-y-4">
      <div className="text-sm sm:text-base max-w-md lg:max-w-none lg:whitespace-nowrap">
       This project is only for assigmnet purpose Connect With Developer by clicking on icons
      </div>

     
      <div className="flex gap-6 sm:gap-8 items-center justify-center text-xl">
        <Link to="https://github.com/Shubhamsharma2002" aria-label="GitHub">
          <FaGithub
            className="text-black hover:scale-110 transition-transform duration-200"
            size={24}
          />
        </Link>
        <Link
          to="https://www.linkedin.com/in/shubhamsharma2026/"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            className="text-[#0A66C2] hover:scale-110 transition-transform duration-200"
            size={24}
          />
        </Link>
        <Link to="https://portfolioshubhamsharma.netlify.app/">
        <BsBrowserChrome />
        </Link>
        
      </div>
    </div>
  );
};

export default Footer;
