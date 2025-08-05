import React, { useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

const ProjectCard = ({ src, title, description, link, githubLink }: Props) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showVideoModal) {
        setShowVideoModal(false);
      }
    };

    if (showVideoModal) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showVideoModal]);

  // Handle card click to show video modal for School Management System or navigate to link
  const handleCardClick = (e: React.MouseEvent) => {
    // Only handle clicks on the card itself, not on child elements with their own handlers
    if (e.target === e.currentTarget || !e.currentTarget.contains(e.target as Node)) {
      if (title === "School Management System" || title === "DanaRent") {
        setShowVideoModal(true);
      } else if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <>
      <div 
        className="group relative h-full overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#0C0C24] transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative h-60 w-full">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {title === "School Management System" && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowVideoModal(true);
              }}
            >
              <div className="text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-2 shadow-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5"></div>
                </div>
                <div className="text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Click to watch demo</div>
              </div>
            </div>
          )}
          {title === "DanaRent" && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowVideoModal(true);
              }}
            >
              <div className="text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-2 shadow-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5"></div>
                </div>
                <div className="text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Click to watch demo</div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          
          {/* Footer with links */}
          <div className="mt-4 flex justify-between items-center">
            {title === "School Management System" || title === "DanaRent" ? (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideoModal(true);
                }}
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                Watch Demo
              </button>
            ) : link ? (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                View Project
              </a>
            ) : null}
            
            {githubLink && (
              <a 
                href="https://github.com/Danadev25L"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-10 bg-red-500 hover:bg-red-600 rounded-full p-3 shadow-lg border-2 border-white"
            >
              <X size={24} />
            </button>
            <div className="absolute top-4 left-4 z-10">
              <span className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">Press ESC to close</span>
            </div>
            <video
              controls
              className="w-full h-full rounded-2xl"
              autoPlay
            >
              <source src={title === "DanaRent" ? "/WhatsApp Video 2025-08-05 at 3.13.01 PM.mp4" : "/scholl-managment-system.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;