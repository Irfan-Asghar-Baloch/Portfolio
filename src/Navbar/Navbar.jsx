import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = ["home", "about", "services", "projects", "contact"];

  // Scroll detection for active link + navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      setIsScrolled(window.scrollY > 20);

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Proper scroll offset for fixed navbar
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const offsetTop = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1120]/95 backdrop-blur border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        
        {/* Logo / Branding */}
        <div className="text-white">
          <div className="text-xl font-bold tracking-wide">
            Irfan <span className="text-[#00E5D0]">Asghar</span>
          </div>
          <div className="text-xs text-slate-400 font-normal tracking-wider">
            Backend .NET Engineer
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-slate-300 font-medium tracking-wide">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`relative transition duration-300 hover:text-[#00E5D0] ${
                  activeSection === item ? "text-[#00E5D0]" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Active underline */}
                {activeSection === item && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#00E5D0] rounded"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-6 px-6 pb-6 pt-4 bg-[#0B1120] text-slate-300 font-medium border-t border-slate-800">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`w-full text-left transition duration-300 hover:text-[#00E5D0] ${
                  activeSection === item ? "text-[#00E5D0]" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
