import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import Logo from '/assets/logo.svg';


const Footer = () => {
  const items = [
    { icon: <BiLogoGmail size={18} />, label: "Mail Me", onClick: () => window.location.href = 'mailto:qaysa78@gmail.com' },
    { icon: <FaGithub size={18} />, label: "Github", onClick: () => window.open("https://github.com/mochammadqaysa", "_blank") },
    { icon: <FaInstagram size={18} />, label: "Instagram", onClick: () => window.open("https://www.instagram.com/mochammadqaysa/", "_blank") },
    { icon: <FaLinkedin size={18} />, label: "LinkedIn", onClick: () => window.open("https://www.linkedin.com/in/mochammadqaysaalhaq/", "_blank") },
  ];

  return (
    <div className="mt-20 md:mt-32 mb-40 md:mb-0 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">

        {/* Judul - paling atas di mobile */}
        <img
          src={Logo}
          alt="React Bits Logo"
          className="h-10 rounded-[10px]"
        />

        {/* Ikon Sosmed - di tengah di mobile */}
        <div className="flex gap-3 order-2 md:order-none">
          <p>Made with ❤️ by Mochammad Qaysa</p>
        </div>

        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock
            items={items}
            panelHeight={70}
            baseItemSize={50}
            magnification={50}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
