import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { AllSkills } from "@/constants";

const Skills: React.FC = () => {
  const categories = Array.from(
    new Set(AllSkills.map((skill) => skill.category))
  ); // Unique categories

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {categories.map((category) => (
        <div key={category} className="flex flex-col gap-5 items-center w-full">
          <h2 className="text-white text-2xl font-bold">{category} Skills</h2>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {AllSkills.filter((skill) => skill.category === category).map(
              (skill) => (
                <SkillDataProvider
                  key={skill.id}
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  index={skill.id}
                />
              )
            )}
          </div>
        </div>
      ))}
      
<div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
