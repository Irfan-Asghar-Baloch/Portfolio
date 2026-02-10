import React, { useState } from "react";
import last from "../assets/last.png";
import SendIcon from "@mui/icons-material/Send";
import keyboardIcon from "../assets/keyboard.png";
import msgeIcon from "../assets/msgeIcon.png";
import emailjs from "emailjs-com";
function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);

    const templateParams = {
      to_name: "Jaweria",
      from_name: "Website Visitor",
      message: "Someone clicked the Send Message button!",
      reply_to: "noreply@example.com",
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then((response) => {
        alert("Message sent!");
        setLoading(false);
      })
      .catch((err) => {
        alert("Error sending message");
        console.error(err, "error");
        setLoading(false);
      });
  };
  return (
    <div className="bg-[#222831] w-full py-10 px-4 border-b-2 border-[#222831]">
      {/* Keyboard Icon */}
      <div className="flex justify-center">
        <img src={keyboardIcon} alt="" className="w-24 sm:w-32 h-24 sm:h-40" />
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-2">
        {/* Left Section (Heading + Image) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <h1 className="text-3xl sm:text-5xl text-white font-bold mb-10">
            Got a project in{" "}
            <span
              className="text-[#00adb5] "
              style={{ textShadow: "20px 2px 4pxrgb(4, 29, 31)" }}
            >
              mind?
            </span>
          </h1>

          <div className="flex justify-center lg:justify-start shadow-lg shadow-cyan-500/50 ">
            <img src={last} alt="Contact Visual" className="w-60 sm:w-72" />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full max-w-xl flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Name Input */}
            <div className="flex flex-col w-full">
              <label className="text-white font-bold mb-1 px-1">
                Your name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-600 text-white rounded-2xl px-4 h-12 w-full"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col w-full">
              <label className="text-white font-bold mb-1 px-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-600 text-white rounded-2xl px-4 h-12 w-full"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-white font-bold mb-1 px-1">
              Your Message
            </label>
            <textarea
              placeholder="Type your message..."
              className="bg-gray-600 text-white rounded-2xl px-4 py-2 h-40 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={sendEmail}
              disabled={loading}
              className="bg-[#00ADB5] w-full md:w-44 h-12 text-white font-bold rounded-2xl drop-shadow-md flex items-center justify-center gap-2 hover:bg-cyan-500"
            >
              {loading ? "Sending..." : "Send Message"}
              <SendIcon />
            </button>

            <img src={msgeIcon} alt="Message Icon" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
