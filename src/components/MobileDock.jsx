import { useState, useEffect } from "react";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscNote, VscMail } from "react-icons/vsc";

const MobileDock = () => {
    const [isMobile, setIsMobile] = useState(false);

    const items = [
        {
            icon: <VscHome size={18} />,
            label: "Home",
            onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
        },
        {
            icon: <VscAccount size={18} />,
            label: "About Me",
            onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        },
        {
            icon: <VscArchive size={18} />,
            label: "Project",
            onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })
        },
        {
            icon: <VscNote size={18} />,
            label: "Resume",
            onClick: () => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
        },
        {
            icon: <VscMail size={18} />,
            label: "Contact",
            onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        handleResize(); // init saat mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Hanya render jika mobile
    if (!isMobile) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[9999] md:hidden">
            <Dock
                items={items}
                panelHeight={30}
                baseItemSize={60}
                magnification={100}
            />
        </div>
    );
};

export default MobileDock;