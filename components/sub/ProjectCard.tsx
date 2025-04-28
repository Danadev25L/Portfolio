import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

const ProjectCard = ({ src, title, description, link, githubLink }: Props) => {
  // Handle card click to navigate to the main link if available
  const handleCardClick = (e: React.MouseEvent) => {
    // Only handle clicks on the card itself, not on child elements with their own handlers
    if (e.target === e.currentTarget || !e.currentTarget.contains(e.target as Node)) {
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
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
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        {/* Footer with links */}
        <div className="mt-4 flex justify-between items-center">
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking this link
              className="text-purple-500 hover:text-purple-400 transition-colors"
            >
              View Project
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking GitHub link
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
  );
};

export default ProjectCard;