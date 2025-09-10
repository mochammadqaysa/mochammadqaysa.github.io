import React, { useState, useEffect } from 'react';
import { FiX, FiGithub, FiLink } from 'react-icons/fi'; // Install react-icons jika belum: npm install react-icons

const ProjectModal = ({ isOpen, onClose, project }) => {
  // State untuk mengontrol animasi penutupan
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi untuk menangani penutupan dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi selesai (300ms) sebelum memanggil onClose dari props
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset state untuk pembukaan berikutnya
    }, 300);
  };

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    // Overlay
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black/70 bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat diklik di dalam
        className={`bg-zinc-900 border border-[#09B6C2]/50 rounded-2xl shadow-2xl shadow-[0_4px_6px_-1px_#09B6C233] w-full max-w-3xl transform transition-transform duration-300 ${isClosing ? 'animate-out' : 'animate-in'}`}
      >
        {/* --- GAMBAR PROYEK --- */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-contain rounded-t-2xl"
        />

        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={handleClose}
              className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-700 -mt-2 -mr-2"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* --- DESKRIPSI LENGKAP --- */}
          <p className="text-zinc-300 text-base leading-relaxed overflow-auto max-h-48">
            {project.fullDescription}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 font-semibold bg-[#09B6C2] p-3 px-5 rounded-lg w-full cursor-pointer border border-transparent hover:bg-[#09B6C2]/80 transition-colors"
          >
            <FiLink />
            <span>Project Link</span>
          </a>
        </div>
      </div>
      {/* CSS untuk animasi */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out {
          animation: scaleOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
