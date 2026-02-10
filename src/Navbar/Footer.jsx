import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { SiFiverr } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };
  return (
    <div className="bg-[#222831] h-[20rem] flex items-center justify-center flex-col gap-y-12 w-full">
      <div className="flex items-center justify-center gap-8 w-full sm:flex-col flex-col md:flex-row">
        <div
          className=" text-[#EEEEEE] gap-1 flex text-1xl cursor-pointer hover:bg-gray-700 rounded-full p-1"
          onClick={() => scrollToSection("home")}
        >
          <HomeOutlinedIcon />
          <span className="text-[#EEEEEE] gap-1 flex text-1xl">Home</span>
        </div>
        <div
          className="text-[#EEEEEE] gap-1 flex text-1xl cursor-pointer cursor-pointer hover:bg-gray-700 rounded-full p-1"
          onClick={() => scrollToSection("about")}
        >
          <PersonOutlineOutlinedIcon />
          <span className="">About me</span>
        </div>
        <div
          className="text-[#EEEEEE] gap-1 flex text-1xl cursor-pointer cursor-pointer hover:bg-gray-700 rounded-full p-1"
          onClick={() => scrollToSection("contact")}
        >
          <CallOutlinedIcon style={{ width: "25px", height: "22px" }} />
          <span className="">Contact</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className=" bg-gray-500/20 p-1 rounded-full w-[40px] h-[40px] flex  items-center justify-center  cursor-pointer">
          {" "}
          <CiFacebook className="w-8 h-[2.6rem] rounded-full text-white" />
        </div>
        <a href="mailto:jaweriab48@gmail.com">
          <div className=" bg-gray-500/20 p-1 rounded-full w-[40px] h-[40px] flex  items-center justify-center  cursor-pointer">
            <CgMail className="w-8 h-[1.9rem] text-white" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jaweria-bilal-25366727b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" bg-gray-500/20 p-1 rounded-full w-[40px] h-[40px] flex  items-center justify-center  cursor-pointer">
            <CiLinkedin className="w-8 h-[2.6rem] text-white" />
          </div>
        </a>
      </div>
      <div className="flex justify-center self-end w-96 h-[2.6rem] items-center pr-12 ">
        {" "}
        <span className="flex text-[#EEEEEEBF] ">
          Terms of Service - Privacy Policy
        </span>
      </div>
    </div>
  );
}

export default Footer;
