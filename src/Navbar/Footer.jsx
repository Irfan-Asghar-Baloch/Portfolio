import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1E1E2F] w-full py-16 flex flex-col items-center gap-10">
      
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[#EEEEEE]">
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-[#00ADB5] transition-colors"
          onClick={() => scrollToSection("home")}
        >
          <HomeOutlinedIcon />
          <span>Home</span>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-[#00ADB5] transition-colors"
          onClick={() => scrollToSection("about")}
        >
          <PersonOutlineOutlinedIcon />
          <span>About Me</span>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-[#00ADB5] transition-colors"
          onClick={() => scrollToSection("contact")}
        >
          <CallOutlinedIcon />
          <span>Contact</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6">
        <a
          href="mailto:irfanasgharmremind@gmail.com"
          className="bg-gray-500/20 p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
        >
          <CgMail className="text-white w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500/20 p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
        >
          <CiLinkedin className="text-white w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500/20 p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
        >
          <CiTwitter className="text-white w-6 h-6" />
        </a>
        <a
          href="https://facebook.com/your-facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500/20 p-2 rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
        >
          <CiFacebook className="text-white w-6 h-6" />
        </a>
      </div>

      {/* Copyright / Terms */}
      <div className="text-[#EEEEEE80] text-sm text-center mt-6">
        &copy; {new Date().getFullYear()} Irfan Asghar | .NET Backend Developer <br />
        Terms of Service - Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;
