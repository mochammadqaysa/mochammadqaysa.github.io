import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import ElectricBorder from "./components/ElectricBorder/ElectricBorder";
import StarBorder from "./components/StarBorder/StarBorder";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CareerTimeLine from "./components/CareerTimeLine";
import EducationTimeLine from "./components/EducationTimeLine";
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Mochammad Qaysa Al-Haq" disabled={false} speed={3} className='custom-class' />
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <h1 className="text-base lg:text-2xl text-white font-bold">I'm Open for</h1>
              <RotatingText
                texts={['Full Stack Developer', 'Android Developer', 'Laravel Developer', 'Backend Developer', 'Flutter Developer', 'Springboot Developer', 'Next.js Developer']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#09B6C2] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-base lg:text-2xl font-bold inline-flex transtion-all text-white"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
              <h1 className="text-base lg:text-2xl text-white font-bold">Role</h1>
            </div>
            <BlurText
              text="A passionate Full Stack & Mobile Developer crafting modern, high-performance digital experiences using Laravel, Spring Boot, Flutter, and React."
              delay={100}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="Faris_Edrik_Prayoga_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="flex justify-center-safe md:justify-end animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Mochammad Qaysa Al-Haq"
              title="Full Stack & Mobile Developer"
              handle="mochammadqaysa"
              status="Online"
              contactText="LinkedIn"
              avatarUrl="./assets/kayzz.png"
              iconUrl={'./assets/iconpattern.png'}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.href = 'https://www.linkedin.com/in/mochammadqaysaalhaq/'}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-cyan-500/40 shadow-[0_0_30px_rgba(9,182,194,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">

            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-cyan-500/40">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Mochammad Qaysa Al-Haq, a Full Stack & Mobile Developer with 4+ years of experience building scalable applications in fintech, manufacturing, and enterprise systems. Skilled in Laravel, Spring Boot, Flutter, and React, I focus on creating clean, maintainable, and high-performance solutions. I enjoy solving complex problems, optimizing performance, and turning ideas into user-friendly digital products that deliver real impact."
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-[#09B6C2]">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      4<span className="text-[#09B6C2]">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.64<span className="text-[#09B6C2]">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>

        <div className="tools mt-20">
          <h1 className="text-3xl/snug md:text-4xl/snug font-bold mb-1" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-screen text-base/loose opacity-50 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Tech Stack that i usually use</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-10 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Selected Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">A curated selection of my work, illustrating the intersection of skill, creativity, and a passion for digital innovation.</p>

        <StarBorder
          as="button"
          className=" mt-10 w-full max-w-[1600px] mx-auto p-1 transition-transform"
          color="white"
          thickness={8}
          speed="2s"
        >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >

            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </StarBorder>
        {/* Proyek */}


        <div className="proyek mt-10 py-10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 id="resume" className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Resume</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here is my educational background, professional experience, and personal projects.</p>
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-cyan-500/40 shadow-[0_0_30px_rgba(9,182,194,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <EducationTimeLine />
            <CareerTimeLine />
          </div>
        </div>


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/qaysa78@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main >

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
