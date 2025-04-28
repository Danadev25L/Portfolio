import React, { JSX } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section 
      className="relative flex flex-col min-h-screen w-full py-16 md:py-20 bg-gradient-to-b from-transparent to-[#03001417] overflow-hidden" 
      id="about-me"
    >
      {/* Enhanced background gradients */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
      
      {/* Content container with better padding for mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-10 sm:pt-12 md:pt-16">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;