import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Resume from "@/components/main/Resume";
import Skills from "@/components/main/Skills";
import WorkExperience from "@/components/main/WorkExperience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <WorkExperience />
        <Skills />
        <Projects />
        <Resume />
      </div>
    </main>
  );
}
