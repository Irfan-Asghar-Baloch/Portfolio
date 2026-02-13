import React, { useState } from "react";
import last from "../assets/last.png";         // your image
import SendIcon from "@mui/icons-material/Send";
import keyboardIcon from "../assets/keyboard.png";
import msgeIcon from "../assets/msgeIcon.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_a3hrtyd",       // Your Service ID
        "template_8vwmqbl",      // Your Template ID
        templateParams,
        "NMEQv3vLnm1K0IIPZ"      // Your Public Key
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#1E1E2F] w-full py-20 px-6 border-t border-gray-700">
      {/* Top Keyboard Icon */}
      <div className="flex justify-center mb-10">
        <img src={keyboardIcon} alt="Keyboard Icon" className="w-28 opacity-80" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
        
        {/* Left Side - Text + Image */}
        <div className="text-center lg:text-left max-w-lg">
         <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Need a Reliable <span className="text-[#00ADB5]">Backend Engineer?</span>
        </h2>

          <p className="text-gray-400 mt-6 text-lg">
            If you're building an enterprise system, healthcare platform, or scalable API —
            let's discuss how I can architect and implement a secure, high-performance backend for your project.
          </p>

          <div className="mt-10 shadow-xl shadow-cyan-500/30 rounded-2xl">
            <img src={last} alt="Contact Visual" className="w-72 mx-auto" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-xl bg-[#2A2A40] p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col gap-5">
            
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#3A3A55] text-white rounded-xl px-4 h-12 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-[#3A3A55] text-white rounded-xl px-4 h-12 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="bg-[#3A3A55] text-white rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />

            {/* Status */}
            {status && (
              <p className={`text-sm text-center ${status === "Message sent successfully!" ? "text-green-400" : "text-red-400"}`}>
                {status}
              </p>
            )}

            {/* Send Button */}
            <button
              onClick={sendEmail}
              disabled={loading}
              className="bg-[#00ADB5] h-12 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-cyan-500 hover:scale-105 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
              <SendIcon />
            </button>
          </div>

          {/* Bottom Message Icon */}
          <div className="flex justify-center mt-6">
            <img src={msgeIcon} alt="Message Icon" className="w-8 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
