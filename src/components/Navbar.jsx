import { useState, useEffect } from "react";
import Logo from '/assets/logo.svg';

const Navbar = ({ hidden = false }) => {
  // ⛔ Saat hidden, jangan render apa pun
  if (hidden) return null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll(); // init posisi saat mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12 max-md:hidden">
      {/* Logo */}
      <div className="logo">
        <img
          src={Logo}
          alt="React Bits Logo"
          className="h-10 rounded-[10px]"
        />
      </div>

      {/* Menu */}
      <ul
        className={`flex items-center sm:gap-10 gap-4 
          static fixed left-1/2 -translate-x-1/2 translate-x-0 
          opacity-100 bg-white/20 backdrop-blur-md 
          bg-transparent backdrop-blur-[10px]
          p-4 rounded-2xl
          transition-all md:transition-none
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li><a href="#home" className="sm:text-md text-base font-medium text-white hover:text-[#09B6C2] transition-colors">Home</a></li>
        <li><a href="#about" className="sm:text-md text-base font-medium text-white hover:text-[#09B6C2] transition-colors">About</a></li>
        <li><a href="#project" className="sm:text-md text-base font-medium text-white hover:text-[#09B6C2] transition-colors">Project</a></li>
        <li><a href="#resume" className="sm:text-md text-base font-medium text-white hover:text-[#09B6C2] transition-colors">Resume</a></li>
        <li><a href="#contact" className="sm:text-md text-base font-medium text-white hover:text-[#09B6C2] transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;